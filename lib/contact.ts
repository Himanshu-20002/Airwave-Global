export interface LeadInquiry {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  service_type?: string;
  port_of_loading?: string;
  port_of_destination?: string;
  message?: string;
  source?: string;
}

const serviceLabels: Record<string, string> = {
  air: 'Priority Air Freight',
  ocean_fcl: 'Ocean FCL (Full Container)',
  ocean_lcl: 'Ocean LCL (Consolidation)',
  ocean: 'Ocean Freight (FCL / LCL)',
  project: 'Project & Heavy Lift ODC Cargo',
  cold_chain: 'Pharma Cold Chain & Reefer',
  customs: 'Customs Brokerage & ICEGATE Clearance',
  warehousing: '3PL Warehousing & Distribution',
};

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  '6aac7b4c-32cf-435a-abff-8d7775ccf8cb';

export async function submitLeadInquiry(
  data: LeadInquiry
): Promise<{ success: boolean; refId: string; message?: string }> {
  const refId = 'AWG-RFQ-' + Math.floor(100000 + Math.random() * 900000);
  const friendlyService =
    (data.service_type && serviceLabels[data.service_type]) ||
    data.service_type ||
    'General Freight Inquiry';

  const subject = `[${refId}] New Freight Inquiry: ${data.name} (${friendlyService})`;

  const payload: Record<string, any> = {
    access_key: WEB3FORMS_KEY,
    subject,
    from_name: 'Airwave Global Freight Desk',
    // Standard Web3Forms Fields (Crucial for deliverability & SPF/DKIM)
    name: data.name,
    email: data.email || 'inquiries@airwaveglobal.in',
    phone: data.phone || 'Not provided',
    message: data.message || `Freight rate inquiry for ${friendlyService}`,
    // Formatted Data Fields
    'Reference ID': refId,
    'Client Name': data.name,
    'Company': data.company || 'Not provided',
    'Phone / WhatsApp': data.phone || 'Not provided',
    'Email Address': data.email || 'Not provided',
    'Freight Service': friendlyService,
    'Port of Origin': data.port_of_loading || 'Not specified',
    'Port of Destination': data.port_of_destination || 'Not specified',
    'Cargo Notes & Specs': data.message || 'No additional notes provided',
    'Timestamp': new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    }),
  };

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (res.ok && (result.success || result.status === 'success')) {
      return { success: true, refId, message: 'Inquiry successfully delivered.' };
    } else {
      const errMsg = result.message || 'Failed to deliver message via Web3Forms';
      console.error('Web3Forms API Error:', errMsg);
      return { success: false, refId, message: errMsg };
    }
  } catch (clientErr: any) {
    console.error('Web3Forms client connection error:', clientErr);
    return {
      success: false,
      refId,
      message: clientErr?.message || 'Network error submitting form. Please check connection.',
    };
  }
}
