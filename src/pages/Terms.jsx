import React, { useState } from 'react';
import './Terms.css';

const Terms = () => {
  const [language, setLanguage] = useState('english');

  const termsData = {
    english: [
      "Our package rates will be applicable only if the number of guests is 1000 or above.",
      "If the number of guests decreases, the per-person rate will increase.",
      "These package rates are strictly for Ahmedabad city. Transport charges will be extra for outside locations.",
      "The package prices are approximate. Final prices will be given after finalizing the menu items.",
      "GST charges will be extra.",
      "Charges for PRO Girls, VIP Boys, and Counter Display Themes will be extra.",
      "Any items not included in the package menu will be charged extra.",
      "Speciality counter dishes will be counted along with the main course.",
      "Lunch party timing is until 3:00 PM and Dinner party timing is until 12:00 Midnight. Overtime service charges will be extra.",
      "The quality of any cooked food will remain good for up to 4 hours from the agreed party time. We will not be responsible after that.",
      "Food management can be done for up to 10% more guests than the finalized number. For guests beyond that, a 20% extra charge per person will apply.",
      "The final bill will be calculated based on whichever is higher: the finalized number of guests or the actual count at the counter.",
      "The party has to pay a 70% advance payment. The remaining 30% payment must be made within 5 days of order completion.",
      "Any reduction in the number of guests must be informed 2 days in advance. No reductions will be accepted after that.",
      "The party plot/hall must be handed over to us 24 hours before the function."
    ],
    gujarati: [
      "અમારો પેકેજ ભાવ ૧૦૦૦ કે તેનાથી ઉપર સંખ્યા હશે તો જ લાગુ પડશે.",
      "ગેસ્ટની સંખ્યામાં ઘટાડો થશે તો ભાવ માં વધારો થશે.",
      "આ પેકેજ ભાવ માત્ર અમદાવાદ શહેર પૂરતો રહેશે. બહાર માટે ટ્રાન્સપોર્ટ ચાર્જ એકસ્ટ્રા રહેશે.",
      "પેકેજના ભાવ અંદાજિત છે. ફાઇનલ ભાવ મેનુ આઈટમ નક્કી થયા બાદ આપવામાં આવશે.",
      "GST ચાર્જ અલગથી આપવાનો રહેશે.",
      "PRO ગર્લ, VIP બોયઝ તથા કાઉન્ટર ડિસ્પ્લે થીમ ચાર્જ અલગથી રહેશે.",
      "જે આઈટમ પેકેજ મેનુમાં નથી તેમના ચાર્જ અલગથી રહેશે.",
      "સ્પેશ્યાલીટી કાઉન્ટર ડીશ મેઈન કોર્સ સાથે ગણવામાં આવશે.",
      "લંચ પાર્ટી ટાઈમ બપોરે 3:00 વાગ્યા સુધી અને ડીનર પાર્ટી ટાઈમ રાત્રે 12:00 વાગ્યા સુધીનો જ રહેશે. ઓવર ટાઈમ સર્વિસનો ચાર્જ એક્સ્ટ્રા રહેશે.",
      "કોઈપણ કુકની ક્વોલિટી પાર્ટી સાથે નક્કી થયેલા સમયથી ૪ કલાક સુધી સારી રહેશે. તે પછી અમારી કોઈ જવાબદારી રહેશે નહિ.",
      "પાર્ટીમાં નક્કી થયેલ સંખ્યાથી ૧૦% વધુ સંખ્યા સુધી ફૂડ મેનેજમેન્ટ થઈ શકશે ત્યારબાદની સંખ્યા માટે વ્યક્તિ દીઠ ૨૦% એક્સ્ટ્રા ચાર્જ લાગુ પડશે.",
      "પાર્ટી સાથે નક્કી થયેલ સંખ્યા અને કાઉન્ટર સંખ્યા માંથી જે વધુ હશે તે મુજબ બીલ થાય જશે.",
      "પાર્ટીએ ૭૦% પેમેન્ટ એડવાન્સ આપવાનું રહેશે. બાકીનું ૩૦% પેમેન્ટ ઓર્ડર પુરો થયાના ૫ દિવસમાં આપવાનું રહેશે.",
      "સંખ્યામાં ઘટાડો ૨ દિવસ પહેલા આપવાનો રહેશે. તે પછીનો કોઈ ઘટાડો થઈ શકશે નહિ.",
      "ફંક્શન ઓર્ડરના ૨૪ કલાક પહેલા પાર્ટી પ્લોટ/હોલ આપવાનો રહેશે."
    ],
    hindi: [
      "हमारे पैकेज की दरें केवल तभी लागू होंगी जब मेहमानों की संख्या 1000 या उससे अधिक हो।",
      "यदि मेहमानों की संख्या कम होती है, तो प्रति व्यक्ति दर में वृद्धि होगी।",
      "ये पैकेज दरें केवल अहमदाबाद शहर के लिए हैं। बाहर के स्थानों के लिए ट्रांसपोर्ट चार्ज अलग से लगेगा।",
      "पैकेज की कीमतें अनुमानित हैं। मेनू आइटम तय होने के बाद अंतिम कीमत दी जाएगी।",
      "GST चार्ज अलग से देना होगा।",
      "PRO गर्ल्स, VIP बॉयज और काउंटर डिस्प्ले थीम के चार्ज अलग से होंगे।",
      "पैकेज मेनू में शामिल न होने वाले किसी भी आइटम के लिए अलग से चार्ज लगेगा।",
      "स्पेशलिटी काउंटर डिशेज को मुख्य कोर्स के साथ गिना जाएगा।",
      "लंच पार्टी का समय दोपहर 3:00 बजे तक और डिनर पार्टी का समय रात 12:00 बजे तक रहेगा। ओवरटाइम सेवा का चार्ज अलग से लगेगा।",
      "पकाए गए भोजन की गुणवत्ता तय पार्टी के समय से 4 घंटे तक अच्छी रहेगी। उसके बाद हमारी कोई जिम्मेदारी नहीं होगी।",
      "तय की गई संख्या से 10% अधिक मेहमानों तक भोजन का प्रबंधन किया जा सकेगा। उसके बाद के मेहमानों के लिए प्रति व्यक्ति 20% अतिरिक्त चार्ज लागू होगा।",
      "अंतिम बिल इस आधार पर बनाया जाएगा कि दोनों में से जो भी अधिक हो: मेहमानों की तय संख्या या काउंटर पर वास्तविक गिनती।",
      "पार्टी को 70% एडवांस पेमेंट देना होगा। शेष 30% पेमेंट ऑर्डर पूरा होने के 5 दिनों के भीतर करना होगा।",
      "मेहमानों की संख्या में किसी भी कमी की जानकारी 2 दिन पहले देनी होगी। उसके बाद कोई कमी स्वीकार नहीं की जाएगी।",
      "फंक्शन से 24 घंटे पहले पार्टी प्लॉट/हॉल हमें सौंपना होगा।"
    ]
  };

  return (
    <div className="terms-page page-container animate-fade-in">
      <h1 className="section-title">Terms & Conditions</h1>
      
      <div className="language-selector text-center mb-4">
        <button 
          className={`btn ${language === 'english' ? 'btn-primary' : 'btn-secondary'} lang-btn`}
          onClick={() => setLanguage('english')}
        >
          English
        </button>
        <button 
          className={`btn ${language === 'hindi' ? 'btn-primary' : 'btn-secondary'} lang-btn`}
          onClick={() => setLanguage('hindi')}
        >
          हिन्दी
        </button>
        <button 
          className={`btn ${language === 'gujarati' ? 'btn-primary' : 'btn-secondary'} lang-btn`}
          onClick={() => setLanguage('gujarati')}
        >
          ગુજરાતી
        </button>
      </div>

      <div className="terms-content">
        <ol className="terms-list">
          {termsData[language].map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Terms;
