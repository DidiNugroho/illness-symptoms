// data penyakit
const illness = [
  {
    name: "Covid",
    symptoms: [
      "Fever",
      "Cough",
      "Shortness of breath",
      "Sore throat",
      "Congestion",
      "Loss of taste or smell",
      "Fatigue",
      "Muscle or body aches",
    ],
  },
  {
    name: "Flu",
    symptoms: [
      "Fever",
      "Aches and pains",
      "Dry Cough",
      "Sore throat",
      "Headache",
      "Loss of appetite",
    ],
  },
  {
    name: "Common cold",
    symptoms: [
      "Blocked or runny nose",
      "Sore throat",
      "Headaches",
      "Cough",
      "Sneezing",
      "pressure in your ears and face",
      "Loss of taste or smell",
    ],
  },
  {
    name: "Diarrhoea and Vomiting",
    symptoms: [
      "Low-grade fever",
      "Stomach pain",
      "Nausea",
      "Watery, usually nonbloody diarrhea",
      "Occasional muscle aches or headache",
    ],
  },
  {
    name: "Dehydration",
    symptoms: [
      "Feeling thirsty",
      "dark yellow and strong-smelling pee",
      "feeling dizzy or lightheaded",
      "feeling tired",
      "dry mouth, lips and eyes",
      "peeing little, and fewer than 4 times a day",
    ],
  },
  {
    name: "Sinusitis",
    symptoms: [
      "Pain, swelling and tenderness around your cheeks, eyes, or forehead",
      "a blocked nose",
      "a reduced sense of smell",
      "a sinus headache",
      "green or yellow mucus from your nose",
      "fever",
      "tootache",
      "bad breath",
    ],
  },
  {
    name: "Earache",
    symptoms: [
      "severe pain (caused by the pressure of mucus on the eardrum)",
      "a high temperature - 38 degrees Celsius or above",
      "slight hearing loss",
    ],
  },
];

//  return : array of symptoms
const getsymptoms = () => {
  const symptoms = [];
  illness.forEach((ill) => {
    ill.symptoms.forEach((sym) => {
      if (!symptoms.includes(sym)) {
        symptoms.push(sym);
      }
    });
  });
  return symptoms;
};

// parameter symptoms : array of symptoms
// return : array of illness name
const diagnose = (symptoms) => {
  let result = [];
  illness.forEach((ill) => {
    let count = 0;
    ill.symptoms.forEach((sym) => {
      if (symptoms.includes(sym)) {
        count++;
      }
    });

    if (!count) return;

    result.push({
      name: ill.name,
      count,
    });
  });
  return result;
};

// parameter symptoms : array of symptoms
// return : object of illness name and count
const getHighestChance = (symptoms) => {
  // get  highest count
  return diagnose(symptoms).sort(
    (first, second) => second.count - first.count
  )[0];
};
