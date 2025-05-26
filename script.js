const symptomsDatabase = [
  'fever', 'headache', 'cough', 'sore throat', 'runny nose', 'fatigue', 'body aches',
  'nausea', 'vomiting', 'diarrhea', 'stomach pain', 'loss of appetite', 'dizziness',
  'chest discomfort', 'trouble breathing', 'fast heartbeat', 'skin rash', 'joint pain',
  'weak muscles', 'trouble sleeping', 'feeling worried', 'feeling very sad', 'trouble remembering',
  'trouble seeing', 'trouble hearing', 'back pain', 'neck pain', 'constipation',
  'frequent urination', 'excessive thirst', 'weight loss', 'weight gain', 'hair loss',
  'trouble focusing', 'getting easily annoyed', 'sudden mood changes', 'feeling very hot suddenly', 'sweating even when cold',
  'dry cough', 'loss of taste', 'chills', 'itchy skin', 'red eyes', 'itchy eyes', 'watery eyes', 'eye discharge', 'blurred vision',
  'stiff neck', 'sensitivity to light', 'bullseye rash', 'bloating', 'chronic muscle pain', 'memory fog',
  'irregular periods', 'acne', 'hair thinning', 'tingling', 'pale skin', 'cold intolerance', 'slow healing wounds',
  'wheezing', 'chest tightness', 'coughing especially at night', 'painful urination', 'frequent urge to urinate', 'cloudy urine',
  'unexplained weight loss', 'persistent cough', 'unusual bleeding', 'lumps under skin', 'persistent headaches', 'seizures',
  'balance issues', 'memory problems', 'behavior changes', 'numbness in limbs', 'pain in arm or jaw', 'cold sweat',
  'lump in breast or underarm', 'change in breast size or shape', 'nipple discharge', 'redness or flaky skin around nipple',
  'dimpling of breast skin', 'gas', 'abdominal discomfort'
];

const diagnosisDatabase = {
  'Common Cold': {
    symptoms: ['runny nose', 'sore throat', 'cough', 'headache', 'fatigue'],
    severity: 'low',
    description: 'A viral infection of the upper respiratory tract.',
    recommendations: 'Rest, stay hydrated, use saline nasal rinses, and consider over-the-counter pain relievers.'
  },
  'Flu (Influenza)': {
    symptoms: ['fever', 'body aches', 'fatigue', 'headache', 'cough', 'sore throat'],
    severity: 'medium',
    description: 'A viral infection that affects the respiratory system.',
    recommendations: 'Rest, drink plenty of fluids, antiviral medications if prescribed, and consider flu vaccination for prevention.'
  },
  'Migraine': {
    symptoms: ['headache', 'nausea', 'trouble seeing', 'dizziness'],
    severity: 'medium',
    description: 'A neurological condition causing severe headaches.',
    recommendations: 'Rest in a dark, quiet room, apply cold compress, stay hydrated, and consult a doctor for preventive medications.'
  },
  'Gastroenteritis': {
    symptoms: ['nausea', 'vomiting', 'diarrhea', 'stomach pain', 'fever'],
    severity: 'medium',
    description: 'Inflammation of the stomach and intestines, often due to infection.',
    recommendations: 'Stay hydrated with electrolyte solutions, eat bland foods, rest, and seek medical attention if symptoms persist.'
  },
  'Anxiety Disorder': {
    symptoms: ['feeling worried', 'fast heartbeat', 'trouble sleeping', 'getting easily annoyed', 'trouble focusing'],
    severity: 'medium',
    description: 'A mental health condition characterized by excessive worry and fear.',
    recommendations: 'Practice relaxation techniques, regular exercise, limit caffeine, and consider counseling or therapy.'
  },
  'Hypertension (High Blood Pressure)': {
    symptoms: ['headache', 'dizziness', 'chest discomfort', 'trouble breathing'],
    severity: 'high',
    description: 'A condition where blood pressure is consistently elevated.',
    recommendations: 'Monitor blood pressure regularly, reduce sodium intake, exercise regularly, and follow prescribed medications.'
  },
  'Diabetes': {
    symptoms: ['excessive thirst', 'frequent urination', 'fatigue', 'weight loss', 'trouble seeing'],
    severity: 'high',
    description: 'A metabolic disorder characterized by high blood sugar levels.',
    recommendations: 'Monitor blood glucose, follow a balanced diet, exercise regularly, and take prescribed medications.'
  },
  'Depression': {
    symptoms: ['feeling very sad', 'fatigue', 'trouble sleeping', 'loss of appetite', 'trouble focusing'],
    severity: 'medium',
    description: 'A mood disorder causing persistent feelings of sadness and loss of interest.',
    recommendations: 'Seek professional counseling, consider medication if prescribed, maintain social connections, and engage in regular physical activity.'
  },
  'Stress/Fatigue': {
    symptoms: ['fatigue', 'headache', 'weak muscles', 'getting easily annoyed', 'trouble sleeping'],
    severity: 'low',
    description: 'Physical and mental exhaustion often due to stress or overwork.',
    recommendations: 'Get adequate rest, practice stress management, maintain a balanced diet, and consider lifestyle changes.'
  },
  'COVID-19': {
    symptoms: ['fever', 'dry cough', 'fatigue', 'loss of taste', 'trouble breathing'],
    severity: 'high',
    description: 'A contagious viral infection caused by the coronavirus.',
    recommendations: 'Consult a doctor immediately. Isolate yourself to prevent spreading. Seek medical help if breathing is difficult. Maintain hygiene and wear a mask.'
  },
  'Malaria': {
    symptoms: ['fever', 'chills', 'sweating', 'headache', 'nausea'],
    severity: 'high',
    description: 'A mosquito-borne infectious disease causing fever and chills.',
    recommendations: 'Consult a doctor for proper medication. Avoid mosquito bites using nets and repellents. Stay hydrated and rest well.'
  },
  'Typhoid': {
    symptoms: ['fever', 'stomach pain', 'constipation', 'fatigue'],
    severity: 'high',
    description: 'A bacterial infection causing high fever and abdominal pain.',
    recommendations: 'Drink boiled or purified water. Maintain good hygiene. Take prescribed antibiotics carefully.'
  },
  'Dengue': {
    symptoms: ['high fever', 'rash', 'muscle pain', 'joint pain', 'headache'],
    severity: 'high',
    description: 'A mosquito-borne viral disease causing severe flu-like symptoms.',
    recommendations: 'Consult a doctor immediately. Use mosquito repellents and nets. Stay hydrated and get plenty of rest. Avoid aspirin-containing painkillers.'
  },
  'Chickenpox': {
    symptoms: ['fever', 'rash', 'itchy skin', 'fatigue', 'loss of appetite'],
    severity: 'medium',
    description: 'A highly contagious viral infection causing itchy rash and fever.',
    recommendations: 'Avoid scratching to prevent infection. Use calamine lotion to reduce itching. Keep skin clean and dry.'
  },
  'Eye Flu': {
    symptoms: ['red eyes', 'itchy eyes', 'watery eyes', 'eye discharge', 'blurred vision'],
    severity: 'low',
    description: 'An infection causing redness, itching, and watering of eyes.',
    recommendations: 'Avoid rubbing your eyes. Use clean towels and wash hands frequently. Consult an eye specialist if symptoms worsen.'
  },
  'Meningitis': {
    symptoms: ['fever', 'headache', 'stiff neck', 'nausea', 'sensitivity to light'],
    severity: 'high',
    description: 'Inflammation of membranes around brain and spinal cord.',
    recommendations: 'Rush to the doctor immediately. Avoid bright lights and lie in a dark room. Take plenty of fluids and rest.'
  },
  'Lyme Disease': {
    symptoms: ['fatigue', 'joint pain', 'fever', 'bullseye rash'],
    severity: 'medium',
    description: 'A tick-borne bacterial infection causing fatigue and rash.',
    recommendations: 'Seek immediate medical attention for diagnosis. Use insect repellents outdoors. Do not ignore recurring joint pain and fatigue.'
  },
  'Lupus': {
    symptoms: ['fatigue', 'joint pain', 'skin rash', 'hair loss'],
    severity: 'medium',
    description: 'An autoimmune disease affecting multiple organs.',
    recommendations: 'Consult a rheumatologist for evaluation. Avoid direct sun exposure. Manage stress and eat a balanced diet.'
  },
  'Celiac Disease': {
    symptoms: ['bloating', 'diarrhea', 'weight loss', 'fatigue', 'skin rash'],
    severity: 'medium',
    description: 'An autoimmune disorder triggered by gluten.',
    recommendations: 'Avoid all gluten-containing foods. Consult a gastroenterologist. Maintain a gluten-free diet permanently.'
  },
  'Fibromyalgia': {
    symptoms: ['chronic muscle pain', 'fatigue', 'sleep issues', 'memory fog'],
    severity: 'medium',
    description: 'A disorder causing widespread musculoskeletal pain and fatigue.',
    recommendations: 'Get proper sleep and reduce stress. Gentle exercises like yoga may help. Consult a specialist if pain persists.'
  },
  'Polycystic Ovary Syndrome (PCOS)': {
    symptoms: ['irregular periods', 'acne', 'weight gain', 'hair thinning'],
    severity: 'medium',
    description: 'A hormonal disorder affecting women’s ovaries.',
    recommendations: 'Consult a gynecologist for hormone evaluation. Follow a healthy diet and exercise routine. Avoid high-sugar and processed foods.'
  },
  'Multiple Sclerosis': {
    symptoms: ['fatigue', 'tingling (pins and needles)', 'trouble seeing', 'weak muscles'],
    severity: 'high',
    description: 'A disease where the immune system attacks nerve coverings.',
    recommendations: 'Rush to the doctor if symptoms persist. Avoid heat and stress. Follow up with a neurologist regularly.'
  },
  'Anemia': {
    symptoms: ['fatigue', 'weakness', 'pale skin', 'trouble breathing', 'dizziness'],
    severity: 'medium',
    description: 'A condition where blood lacks enough healthy red cells.',
    recommendations: 'Eat iron-rich foods like spinach and red meat. Consult your doctor for supplements. Avoid excessive caffeine.'
  },
  'Hypothyroidism': {
    symptoms: ['fatigue', 'weight gain', 'cold intolerance (feeling cold all the time)', 'dry skin', 'constipation'],
    severity: 'medium',
    description: 'A condition where thyroid gland activity is low.',
    recommendations: 'Get thyroid function tests done. Take prescribed hormone replacement. Maintain a balanced diet and regular exercise.'
  },
  'Diabetes (Type 2)': {
    symptoms: ['frequent urination', 'increased thirst', 'fatigue', 'trouble seeing', 'slow healing wounds'],
    severity: 'high',
    description: 'A metabolic disorder with high blood sugar levels.',
    recommendations: 'Maintain a healthy diet low in sugar. Exercise regularly. Monitor blood sugar levels as advised by your doctor.'
  },
  'Asthma': {
    symptoms: ['trouble breathing', 'wheezing', 'chest tightness', 'coughing especially at night'],
    severity: 'medium',
    description: 'A respiratory condition causing airway inflammation.',
    recommendations: 'Avoid triggers like smoke and allergens. Use inhalers as prescribed. Seek emergency help if breathing is difficult.'
  },
  'Urinary Tract Infection (UTI)': {
    symptoms: ['painful urination', 'frequent urge to urinate', 'cloudy urine', 'lower stomach pain'],
    severity: 'medium',
    description: 'An infection in any part of the urinary system.',
    recommendations: 'Drink plenty of water. Avoid irritants like caffeine. Consult a doctor for antibiotics.'
  },
  'Breast Cancer': {
    symptoms: ['lumps under skin', 'change in breast size or shape', 'nipple discharge', 'redness or flaky skin around nipple', 'dimpling of breast skin'],
    severity: 'high',
    description: 'A malignant tumor in breast tissue.',
    recommendations: 'Self-examine breasts regularly. Consult a doctor immediately if any signs appear.'
  },
  'Epilepsy': {
    symptoms: ['seizures', 'loss of consciousness', 'confusion after seizures'],
    severity: 'high',
    description: 'A neurological disorder causing repeated seizures.',
    recommendations: 'Follow prescribed medications strictly. Avoid triggers like flashing lights. Inform family and friends about first aid.'
  }
};


// Global variables to store current results
let currentMatches = [];
let currentSymptoms = [];

// Initialize the application
function initializeApp() {
  populateSymptoms();
  setupEventListeners();
}

// Populate symptoms checkboxes
function populateSymptoms() {
  const checkboxContainer = document.getElementById('checkboxes');
  checkboxContainer.innerHTML = '';

  symptomsDatabase.forEach(symptom => {
    const checkboxItem = document.createElement('div');
    checkboxItem.className = 'checkbox-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = symptom.toLowerCase().replace(/\s+/g, '-');
    checkbox.value = symptom.toLowerCase();
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = symptom;
    
    checkboxItem.appendChild(checkbox);
    checkboxItem.appendChild(label);
    checkboxContainer.appendChild(checkboxItem);
  });
}

// Set up event listeners
function setupEventListeners() {
  document.getElementById('go-to-checker').addEventListener('click', () => {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('symptom-checker').style.display = 'block';
  });

  document.getElementById('back-to-home').addEventListener('click', () => {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('symptom-checker').style.display = 'none';
    document.getElementById('result-box').style.display = 'none';
    document.getElementById('symptom-form').reset();
  });

  document.getElementById('symptom-form').addEventListener('submit', handleFormSubmit);
  document.getElementById('download-pdf').addEventListener('click', generatePDF);
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const selectedSymptoms = [];
  const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]:checked');
  
  checkboxes.forEach(checkbox => {
    selectedSymptoms.push(checkbox.value);
  });

  if (selectedSymptoms.length === 0) {
    alert('Please select at least one symptom.');
    return;
  }

  const diagnosis = analyzeSymptons(selectedSymptoms);
  displayResults(diagnosis, selectedSymptoms);
}

// Analyze symptoms and return possible diagnoses
function analyzeSymptons(selectedSymptoms) {
  const possibleDiagnoses = [];

  Object.keys(diagnosisDatabase).forEach(condition => {
    const conditionData = diagnosisDatabase[condition];
    const matchCount = conditionData.symptoms.filter(symptom => 
      selectedSymptoms.includes(symptom)
    ).length;

    if (matchCount > 0) {
      possibleDiagnoses.push({
        condition,
        matchPercentage: (matchCount / conditionData.symptoms.length * 100).toFixed(1),
        matchCount,
        ...conditionData
      });
    }
  });

  // Sort by match percentage and keep only top 2
  return possibleDiagnoses.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 2);
}

// Display results
function displayResults(diagnoses, selectedSymptoms) {
  const resultBox = document.getElementById('result-box');
  const resultElement = document.getElementById('result');
  
  // Store current results globally
  currentMatches = diagnoses;
  currentSymptoms = selectedSymptoms;
  
  let resultHTML = `
    <div class="diagnosis-section">
      <div class="diagnosis-title">📋 Selected Symptoms:</div>
      <p>${selectedSymptoms.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}</p>
    </div>
  `;

  if (diagnoses.length === 0) {
    resultHTML += `
      <div class="diagnosis-section">
        <div class="diagnosis-title">No specific conditions identified</div>
        <p>Based on your symptoms, no specific conditions were identified. Please consult with a healthcare professional for proper evaluation.</p>
      </div>
    `;
  } else {
    resultHTML += '<div class="diagnosis-title">🔍 Possible Conditions (Top 2):</div>';
    
    diagnoses.forEach((diagnosis, index) => {
      resultHTML += `
        <div class="diagnosis-section">
          <div class="diagnosis-title">${index + 1}. ${diagnosis.condition}</div>
          <span class="severity ${diagnosis.severity}">Severity: ${diagnosis.severity.toUpperCase()}</span>
          <p><strong>Match:</strong> ${diagnosis.matchPercentage}% (${diagnosis.matchCount} symptoms)</p>
          <p><strong>Description:</strong> ${diagnosis.description}</p>
          <p><strong>Recommendations:</strong> ${diagnosis.recommendations}</p>
        </div>
      `;
    });
  }

  resultHTML += `
    <div class="diagnosis-section" style="background: #fff3cd; border-color: #ffc107;">
      <div class="diagnosis-title" style="color: #856404;">⚠️ Important Disclaimer</div>
      <p style="color: #856404;"><strong>This is not a medical diagnosis.</strong> This tool is for informational purposes only. Please consult with a qualified healthcare professional for proper medical evaluation and treatment.</p>
    </div>
  `;

  resultElement.innerHTML = resultHTML;
  resultBox.style.display = 'block';
  document.getElementById('download-pdf').style.display = 'block';
  
  // Scroll to results
  resultBox.scrollIntoView({ behavior: 'smooth' });
}

// Generate PDF report
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();
  
  // Add title
  pdf.setFontSize(20);
  pdf.text('HealthWise Diagnostic Report', 20, 30);
  
  // Add date
  pdf.setFontSize(12);
  pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 45);
  
  // Add disclaimer
  pdf.setFontSize(10);
  pdf.text('⚠️ For informational purposes only — please seek a doctor\'s advice for any medical concerns.', 20, 60);
  
  // Add selected symptoms
  pdf.setFontSize(14);
  pdf.text('Selected Symptoms:', 20, 80);
  pdf.setFontSize(12);
  const symptomsText = currentSymptoms.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');
  const splitSymptoms = pdf.splitTextToSize(symptomsText, 170);
  pdf.text(splitSymptoms, 20, 90);
  
  // Add possible conditions
  let yPosition = 110;
  pdf.setFontSize(14);
  pdf.text('Possible Conditions (Top 2):', 20, yPosition);
  yPosition += 10;
  
  currentMatches.forEach((match, index) => {
    pdf.setFontSize(12);
    pdf.text(`${index + 1}. ${match.condition} - ${match.matchPercentage}% match`, 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    const descriptionLines = pdf.splitTextToSize(`Description: ${match.description}`, 170);
    pdf.text(descriptionLines, 25, yPosition);
    yPosition += descriptionLines.length * 5 + 3;
    
    const recommendationLines = pdf.splitTextToSize(`Recommendations: ${match.recommendations}`, 170);
    pdf.text(recommendationLines, 25, yPosition);
    yPosition += recommendationLines.length * 5 + 8;
  });
  
  // Add footer
  pdf.setFontSize(10);
  pdf.text('Made by Raunak Raj - HealthWise Diagnostic', 20, 280);
  
  // Save the PDF
  pdf.save('healthwise-diagnostic-report.pdf');
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);