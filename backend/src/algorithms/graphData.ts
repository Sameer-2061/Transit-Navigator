export const existingMetroGraph: Record<string, Record<string, any>> = {
 "Delhi NCR": {
    // ==========================================
    // YELLOW LINE CORRIDOR (DMRC)
    // ==========================================
    "Kashmere Gate": {
      lat: 28.6675,
      lng: 77.2282,
      connections: {
        "New Delhi": { distance: 3.2, time: 6, fare: 0, line: "Yellow Line" },
        "Welcome": { distance: 4.5, time: 8, fare: 0, line: "Red Line" },
        "Lal Quila": { distance: 1.5, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "New Delhi": {
      lat: 28.6431,
      lng: 77.2223,
      connections: {
        "Kashmere Gate": { distance: 3.2, time: 6, fare: 0, line: "Yellow Line" },
        "Rajiv Chowk": { distance: 1.5, time: 3, fare: 0, line: "Yellow Line" },
        "Shivaji Stadium": { distance: 1.8, time: 3, fare: 0, line: "Airport Express" }
      }
    },
    "Rajiv Chowk": {
      lat: 28.6328,
      lng: 77.2197,
      connections: {
        "New Delhi": { distance: 1.5, time: 3, fare: 0, line: "Yellow Line" },
        "Central Secretariat": { distance: 1.9, time: 4, fare: 0, line: "Yellow Line" },
        "Mandi House": { distance: 1.2, time: 3, fare: 0, line: "Blue Line" },
        "RK Ashram Marg": { distance: 1.0, time: 2, fare: 0, line: "Blue Line" }
      }
    },
    "Central Secretariat": {
      lat: 28.6147,
      lng: 77.2119,
      connections: {
        "Rajiv Chowk": { distance: 1.9, time: 4, fare: 0, line: "Yellow Line" },
        "INA": { distance: 3.5, time: 6, fare: 0, line: "Yellow Line" },
        "Janpath": { distance: 1.1, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "INA": {
      lat: 28.5753,
      lng: 77.2093,
      connections: {
        "Central Secretariat": { distance: 3.5, time: 6, fare: 0, line: "Yellow Line" },
        "Hauz Khas": { distance: 2.8, time: 5, fare: 0, line: "Yellow Line" },
        "Lajpat Nagar": { distance: 2.5, time: 4, fare: 0, line: "Pink Line" },
        "Sarojini Nagar": { distance: 1.2, time: 2, fare: 0, line: "Pink Line" }
      }
    },
    "Hauz Khas": {
      lat: 28.5434,
      lng: 77.2067,
      connections: {
        "INA": { distance: 2.8, time: 5, fare: 0, line: "Yellow Line" },
        "Saket": { distance: 2.2, time: 4, fare: 0, line: "Yellow Line" },
        "Kalkaji Mandir": { distance: 4.8, time: 8, fare: 0, line: "Magenta Line" },
        "Panchsheel Park": { distance: 1.5, time: 3, fare: 0, line: "Magenta Line" }
      }
    },
    "Saket": {
      lat: 28.5206,
      lng: 77.2014,
      connections: {
        "Hauz Khas": { distance: 2.2, time: 4, fare: 0, line: "Yellow Line" },
        "Qutab Minar": { distance: 1.8, time: 3, fare: 0, line: "Yellow Line" }
      }
    },
    "Qutab Minar": {
      lat: 28.513,
      lng: 77.1865,
      connections: {
        "Saket": { distance: 1.8, time: 3, fare: 0, line: "Yellow Line" },
        "Sikanderpur (Gurugram)": { distance: 6.0, time: 10, fare: 0, line: "Yellow Line" }
      }
    },
    "Sikanderpur (Gurugram)": {
      lat: 28.4819,
      lng: 77.0932,
      connections: {
        "Qutab Minar": { distance: 6.0, time: 10, fare: 0, line: "Yellow Line" },
        "HUDA City Centre (Gurugram)": { distance: 3.5, time: 5, fare: 0, line: "Yellow Line" },
        "Phase 1 (Gurugram)": { distance: 0.9, time: 2, fare: 0, line: "Rapid Metro Line" },
        "Phase 2 (Gurugram)": { distance: 1.1, time: 2, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "HUDA City Centre (Gurugram)": {
      lat: 28.4593,
      lng: 77.0727,
      connections: {
        "Sikanderpur (Gurugram)": { distance: 3.5, time: 5, fare: 0, line: "Yellow Line" }
      }
    },

    // ==========================================
    // GURUGRAM RAPID METRO LINE (INTEGRATED)
    // ==========================================
    "Sector 55-56 (Gurugram)": {
      lat: 28.4272,
      lng: 77.1031,
      connections: {
        "Sector 54 Forest Station (Gurugram)": { distance: 1.2, time: 2, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "Sector 54 Forest Station (Gurugram)": {
      lat: 28.4374,
      lng: 77.0991,
      connections: {
        "Sector 55-56 (Gurugram)": { distance: 1.2, time: 2, fare: 0, line: "Rapid Metro Line" },
        "Sector 53-54 (Gurugram)": { distance: 1.3, time: 2, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "Sector 53-54 (Gurugram)": {
      lat: 28.4485,
      lng: 77.0945,
      connections: {
        "Sector 54 Forest Station (Gurugram)": { distance: 1.3, time: 2, fare: 0, line: "Rapid Metro Line" },
        "Sector 42-43 (Gurugram)": { distance: 1.7, time: 3, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "Sector 42-43 (Gurugram)": {
      lat: 28.4632,
      lng: 77.0898,
      connections: {
        "Sector 53-54 (Gurugram)": { distance: 1.7, time: 3, fare: 0, line: "Rapid Metro Line" },
        "Phase 1 (Gurugram)": { distance: 1.4, time: 2, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "Phase 1 (Gurugram)": {
      lat: 28.4754,
      lng: 77.0901,
      connections: {
        "Sector 42-43 (Gurugram)": { distance: 1.4, time: 3, fare: 0, line: "Rapid Metro Line" },
        "Sikanderpur (Gurugram)": { distance: 0.9, time: 2, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "Phase 2 (Gurugram)": {
      lat: 28.4901,
      lng: 77.0872,
      connections: {
        "Sikanderpur (Gurugram)": { distance: 1.1, time: 2, fare: 0, line: "Rapid Metro Line" },
        "Belvedere Towers (Gurugram)": { distance: 0.7, time: 1, fare: 0, line: "Rapid Metro Line" }
      }
    },
    "Belvedere Towers (Gurugram)": {
      lat: 28.4952,
      lng: 77.0874,
      connections: {
        "Phase 2 (Gurugram)": { distance: 0.7, time: 1, fare: 0, line: "Rapid Metro Line" }
      }
    },

    // ==========================================
    // NOIDA AQUA LINE (INTEGRATED VIA BOTANICAL GARDEN)
    // ==========================================
    "Sector 51 (Noida)": {
      lat: 28.5746,
      lng: 77.3712,
      connections: {
        "Sector 50 (Noida)": { distance: 1.2, time: 2, fare: 0, line: "Aqua Line" },
        "Botanical Garden (Noida)": { distance: 3.5, time: 6, fare: 0, line: "Blue Line" }
      }
    },
    "Sector 50 (Noida)": {
      lat: 28.5752,
      lng: 77.3824,
      connections: {
        "Sector 51 (Noida)": { distance: 1.2, time: 2, fare: 0, line: "Aqua Line" },
        "Sector 76 (Noida)": { distance: 1.0, time: 2, fare: 0, line: "Aqua Line" }
      }
    },
    "Sector 76 (Noida)": {
      lat: 28.5694,
      lng: 77.3912,
      connections: {
        "Sector 50 (Noida)": { distance: 1.0, time: 2, fare: 0, line: "Aqua Line" },
        "Sector 101 (Noida)": { distance: 1.6, time: 3, fare: 0, line: "Aqua Line" }
      }
    },
    "Sector 101 (Noida)": {
      lat: 28.5574,
      lng: 77.3985,
      connections: {
        "Sector 76 (Noida)": { distance: 1.6, time: 3, fare: 0, line: "Aqua Line" },
        "Sector 81 (Noida)": { distance: 1.5, time: 3, fare: 0, line: "Aqua Line" }
      }
    },
    "Sector 81 (Noida)": {
      lat: 28.5445,
      lng: 77.4021,
      connections: {
        "Sector 101 (Noida)": { distance: 1.5, time: 3, fare: 0, line: "Aqua Line" },
        "Sector 137 (Noida)": { distance: 4.6, time: 7, fare: 0, line: "Aqua Line" }
      }
    },
    "Sector 137 (Noida)": {
      lat: 28.5042,
      lng: 77.4144,
      connections: {
        "Sector 81 (Noida)": { distance: 4.6, time: 7, fare: 0, line: "Aqua Line" },
        "Sector 142 (Noida)": { distance: 1.8, time: 3, fare: 0, line: "Aqua Line" }
      }
    },
    "Sector 142 (Noida)": {
      lat: 28.4892,
      lng: 77.4215,
      connections: {
        "Sector 137 (Noida)": { distance: 1.8, time: 3, fare: 0, line: "Aqua Line" },
        "Knowledge Park II (Greater Noida)": { distance: 9.2, time: 12, fare: 0, line: "Aqua Line" }
      }
    },
    "Knowledge Park II (Greater Noida)": {
      lat: 28.4611,
      lng: 77.5024,
      connections: {
        "Sector 142 (Noida)": { distance: 9.2, time: 12, fare: 0, line: "Aqua Line" }
      }
    },

    // ==========================================
    // BLUE LINE CORRIDOR (DMRC)
    // ==========================================
    "Mandi House": {
      lat: 28.6259,
      lng: 77.2341,
      connections: {
        "Rajiv Chowk": { distance: 1.2, time: 3, fare: 0, line: "Blue Line" },
        "Indraprastha": { distance: 1.8, time: 3, fare: 0, line: "Blue Line" },
        "Janpath": { distance: 1.4, time: 3, fare: 0, line: "Violet Line" },
        "ITO": { distance: 0.9, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "Indraprastha": {
      lat: 28.6205,
      lng: 77.2499,
      connections: {
        "Mandi House": { distance: 1.8, time: 3, fare: 0, line: "Blue Line" },
        "Yamuna Bank": { distance: 2.0, time: 4, fare: 0, line: "Blue Line" }
      }
    },
    "Yamuna Bank": {
      lat: 28.6233,
      lng: 77.2679,
      connections: {
        "Indraprastha": { distance: 2.0, time: 4, fare: 0, line: "Blue Line" },
        "Akshardham": { distance: 1.5, time: 3, fare: 0, line: "Blue Line" },
        "Laxmi Nagar": { distance: 1.2, time: 2, fare: 0, line: "Blue Line" }
      }
    },
    "Laxmi Nagar": {
      lat: 28.6306,
      lng: 77.2775,
      connections: {
        "Yamuna Bank": { distance: 1.2, time: 2, fare: 0, line: "Blue Line" },
        "Nirman Vihar": { distance: 1.1, time: 2, fare: 0, line: "Blue Line" }
      }
    },
    "Nirman Vihar": {
      lat: 28.6366,
      lng: 77.2868,
      connections: {
        "Laxmi Nagar": { distance: 1.1, time: 2, fare: 0, line: "Blue Line" }
      }
    },
    "RK Ashram Marg": {
      lat: 28.6392,
      lng: 77.2084,
      connections: {
        "Rajiv Chowk": { distance: 1.0, time: 2, fare: 0, line: "Blue Line" },
        "Karol Bagh": { distance: 2.0, time: 4, fare: 0, line: "Blue Line" }
      }
    },
    "Karol Bagh": {
      lat: 28.644,
      lng: 77.1885,
      connections: {
        "RK Ashram Marg": { distance: 2.0, time: 4, fare: 0, line: "Blue Line" },
        "Kirti Nagar": { distance: 3.5, time: 6, fare: 0, line: "Blue Line" }
      }
    },
    "Kirti Nagar": {
      lat: 28.6558,
      lng: 77.1506,
      connections: {
        "Karol Bagh": { distance: 3.5, time: 6, fare: 0, line: "Blue Line" },
        "Rajouri Garden": { distance: 2.8, time: 5, fare: 0, line: "Blue Line" },
        "Ashok Park Main": { distance: 3.0, time: 6, fare: 0, line: "Green Line" }
      }
    },
    "Rajouri Garden": {
      lat: 28.649,
      lng: 77.1227,
      connections: {
        "Kirti Nagar": { distance: 2.8, time: 5, fare: 0, line: "Blue Line" },
        "Janakpuri West": { distance: 4.5, time: 8, fare: 0, line: "Blue Line" },
        "Mayapuri": { distance: 1.5, time: 3, fare: 0, line: "Pink Line" }
      }
    },
    "Janakpuri West": {
      lat: 28.6294,
      lng: 77.0777,
      connections: {
        "Rajouri Garden": { distance: 4.5, time: 8, fare: 0, line: "Blue Line" },
        "Dwarka Sector 21": { distance: 8.0, time: 14, fare: 0, line: "Blue Line" },
        "Palam": { distance: 2.0, time: 4, fare: 0, line: "Magenta Line" }
      }
    },
    "Dwarka Sector 21": {
      lat: 28.5523,
      lng: 77.0583,
      connections: {
        "Janakpuri West": { distance: 8.0, time: 14, fare: 0, line: "Blue Line" },
        "IGI Airport": { distance: 3.5, time: 5, fare: 0, line: "Airport Express" }
      }
    },
    "Botanical Garden (Noida)": {
      lat: 28.5641,
      lng: 77.3342,
      connections: {
        "Kalkaji Mandir": { distance: 8.5, time: 14, fare: 0, line: "Magenta Line" },
        "Sector 51 (Noida)": { distance: 3.5, time: 6, fare: 0, line: "Blue Line" }
      }
    },

    // ==========================================
    // PINK LINE CORRIDOR (DMRC)
    // ==========================================
    "Delhi Cantonment": {
      lat: 28.5925,
      lng: 77.1425,
      connections: {
        "Sir Vishweshwaraiah Moti Bagh": { distance: 2.2, time: 4, fare: 0, line: "Pink Line" },
        "Mayapuri": { distance: 2.5, time: 5, fare: 0, line: "Pink Line" }
      }
    },
    "Sir Vishweshwaraiah Moti Bagh": {
      lat: 28.583,
      lng: 77.1704,
      connections: {
        "Delhi Cantonment": { distance: 2.2, time: 4, fare: 0, line: "Pink Line" },
        "Bhikaji Cama Place": { distance: 1.4, time: 3, fare: 0, line: "Pink Line" }
      }
    },
    "Bhikaji Cama Place": {
      lat: 28.5714,
      lng: 77.1855,
      connections: {
        "Sir Vishweshwaraiah Moti Bagh": { distance: 1.4, time: 3, fare: 0, line: "Pink Line" },
        "Sarojini Nagar": { distance: 1.2, time: 2, fare: 0, line: "Pink Line" }
      }
    },
    "Sarojini Nagar": {
      lat: 28.5721,
      lng: 77.195,
      connections: {
        "Bhikaji Cama Place": { distance: 1.2, time: 2, fare: 0, line: "Pink Line" },
        "Dilli Haat INA": { distance: 1.1, time: 2, fare: 0, line: "Pink Line" },
        "INA": { distance: 1.2, time: 2, fare: 0, line: "Pink Line" }
      }
    },
    "Dilli Haat INA": {
      lat: 28.5753,
      lng: 77.2093,
      connections: {
        "Sarojini Nagar": { distance: 1.1, time: 2, fare: 0, line: "Pink Line" },
        "South Extension": { distance: 1.3, time: 3, fare: 0, line: "Pink Line" }
      }
    },
    "South Extension": {
      lat: 28.5684,
      lng: 77.2198,
      connections: {
        "Dilli Haat INA": { distance: 1.3, time: 3, fare: 0, line: "Pink Line" },
        "Lajpat Nagar": { distance: 1.5, time: 3, fare: 0, line: "Pink Line" }
      }
    },
    "Lajpat Nagar": {
      lat: 28.5708,
      lng: 77.2365,
      connections: {
        "South Extension": { distance: 1.5, time: 3, fare: 0, line: "Pink Line" },
        "Vinobapuri": { distance: 1.6, time: 3, fare: 0, line: "Pink Line" },
        "INA": { distance: 2.5, time: 4, fare: 0, line: "Pink Line" },
        "Jangpura": { distance: 1.5, time: 3, fare: 0, line: "Violet Line" },
        "Kalkaji Mandir": { distance: 3.5, time: 6, fare: 0, line: "Violet Line" }
      }
    },
    "Vinobapuri": {
      lat: 28.5739,
      lng: 77.2514,
      connections: {
        "Lajpat Nagar": { distance: 1.6, time: 3, fare: 0, line: "Pink Line" },
        "Ashram": { distance: 1.4, time: 3, fare: 0, line: "Pink Line" }
      }
    },
    "Ashram": {
      lat: 28.5824,
      lng: 77.2562,
      connections: {
        "Vinobapuri": { distance: 1.4, time: 3, fare: 0, line: "Pink Line" },
        "Hazrat Nizamuddin": { distance: 1.8, time: 3, fare: 0, line: "Pink Line" }
      }
    },
    "Hazrat Nizamuddin": {
      lat: 28.588,
      lng: 77.253,
      connections: {
        "Ashram": { distance: 1.8, time: 3, fare: 0, line: "Pink Line" },
        "Mayur Vihar 1": { distance: 3.5, time: 6, fare: 0, line: "Pink Line" }
      }
    },
    "Mayur Vihar 1": {
      lat: 28.6044,
      lng: 77.2893,
      connections: {
        "Hazrat Nizamuddin": { distance: 3.5, time: 6, fare: 0, line: "Pink Line" },
        "Mayur Vihar Ext": { distance: 1.2, time: 2, fare: 0, line: "Blue Line" },
        "Akshardham": { distance: 1.8, time: 3, fare: 0, line: "Blue Line" }
      }
    },
    "Mayur Vihar Ext": {
      lat: 28.5943,
      lng: 77.2946,
      connections: {
        "Mayur Vihar 1": { distance: 1.2, time: 2, fare: 0, line: "Blue Line" }
      }
    },
    "Akshardham": {
      lat: 28.6181,
      lng: 77.2787,
      connections: {
        "Mayur Vihar 1": { distance: 1.8, time: 3, fare: 0, line: "Blue Line" },
        "Yamuna Bank": { distance: 1.5, time: 3, fare: 0, line: "Blue Line" }
      }
    },
    "Mayapuri": {
      lat: 28.6258,
      lng: 77.1264,
      connections: {
        "Delhi Cantonment": { distance: 2.5, time: 5, fare: 0, line: "Pink Line" },
        "Rajouri Garden": { distance: 1.5, time: 3, fare: 0, line: "Pink Line" }
      }
    },

    // ==========================================
    // VIOLET LINE CORRIDOR & FARIDABAD (INTEGRATED)
    // ==========================================
    "Janpath": {
      lat: 28.6212,
      lng: 77.2189,
      connections: {
        "Mandi House": { distance: 1.4, time: 3, fare: 0, line: "Violet Line" },
        "Central Secretariat": { distance: 1.1, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "Lal Quila": {
      lat: 28.6548,
      lng: 77.2386,
      connections: {
        "Kashmere Gate": { distance: 1.5, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Jangpura": {
      lat: 28.5843,
      lng: 77.2376,
      connections: {
        "Lajpat Nagar": { distance: 1.5, time: 3, fare: 0, line: "Violet Line" },
        "ITO": { distance: 4.5, time: 7, fare: 0, line: "Violet Line" }
      }
    },
    "ITO": {
      lat: 28.6284,
      lng: 77.2396,
      connections: {
        "Jangpura": { distance: 4.5, time: 7, fare: 0, line: "Violet Line" },
        "Mandi House": { distance: 0.9, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "Kalkaji Mandir": {
      lat: 28.55,
      lng: 77.2583,
      connections: {
        "Lajpat Nagar": { distance: 3.5, time: 6, fare: 0, line: "Violet Line" },
        "Badarpur": { distance: 5.5, time: 9, fare: 0, line: "Violet Line" },
        "Hauz Khas": { distance: 4.8, time: 8, fare: 0, line: "Magenta Line" },
        "Botanical Garden (Noida)": { distance: 8.5, time: 14, fare: 0, line: "Magenta Line" }
      }
    },
    "Badarpur": {
      lat: 28.4933,
      lng: 77.303,
      connections: {
        "Kalkaji Mandir": { distance: 5.5, time: 9, fare: 0, line: "Violet Line" },
        "Sarai (Faridabad)": { distance: 2.5, time: 4, fare: 0, line: "Violet Line" }
      }
    },
    "Sarai (Faridabad)": {
      lat: 28.4779,
      lng: 77.3049,
      connections: {
        "Badarpur": { distance: 2.5, time: 4, fare: 0, line: "Violet Line" },
        "NHPC Chowk (Faridabad)": { distance: 1.6, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "NHPC Chowk (Faridabad)": {
      lat: 28.4624,
      lng: 77.3053,
      connections: {
        "Sarai (Faridabad)": { distance: 1.6, time: 3, fare: 0, line: "Violet Line" },
        "Mewla Maharajpur (Faridabad)": { distance: 1.5, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Mewla Maharajpur (Faridabad)": {
      lat: 28.4485,
      lng: 77.3081,
      connections: {
        "NHPC Chowk (Faridabad)": { distance: 1.5, time: 3, fare: 0, line: "Violet Line" },
        "Sector 28 (Faridabad)": { distance: 1.2, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "Sector 28 (Faridabad)": {
      lat: 28.4354,
      lng: 77.3061,
      connections: {
        "Mewla Maharajpur (Faridabad)": { distance: 1.2, time: 2, fare: 0, line: "Violet Line" },
        "Badkhal Mor (Faridabad)": { distance: 1.7, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Badkhal Mor (Faridabad)": {
      lat: 28.4227,
      lng: 77.3102,
      connections: {
        "Sector 28 (Faridabad)": { distance: 1.7, time: 3, fare: 0, line: "Violet Line" },
        "Old Faridabad (Faridabad)": { distance: 1.2, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "Old Faridabad (Faridabad)": {
      lat: 28.4122,
      lng: 77.3113,
      connections: {
        "Badkhal Mor (Faridabad)": { distance: 1.2, time: 2, fare: 0, line: "Violet Line" },
        "Neelam Chowk Ajronda (Faridabad)": { distance: 1.6, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Neelam Chowk Ajronda (Faridabad)": {
      lat: 28.4007,
      lng: 77.3091,
      connections: {
        "Old Faridabad (Faridabad)": { distance: 1.6, time: 3, fare: 0, line: "Violet Line" },
        "Bata Chowk (Faridabad)": { distance: 1.3, time: 2, fare: 0, line: "Violet Line" }
      }
    },
    "Bata Chowk (Faridabad)": {
      lat: 28.3864,
      lng: 77.2988,
      connections: {
        "Neelam Chowk Ajronda (Faridabad)": { distance: 1.3, time: 2, fare: 0, line: "Violet Line" },
        "Escorts Mujesar (Faridabad)": { distance: 1.8, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Escorts Mujesar (Faridabad)": {
      lat: 28.3702,
      lng: 77.315,
      connections: {
        "Bata Chowk (Faridabad)": { distance: 1.8, time: 3, fare: 0, line: "Violet Line" },
        "Sant Surdas (Sihi) (Faridabad)": { distance: 1.7, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Sant Surdas (Sihi) (Faridabad)": {
      lat: 28.3547,
      lng: 77.3163,
      connections: {
        "Escorts Mujesar (Faridabad)": { distance: 1.7, time: 3, fare: 0, line: "Violet Line" },
        "Raja Nahar Singh (Faridabad)": { distance: 1.7, time: 3, fare: 0, line: "Violet Line" }
      }
    },
    "Raja Nahar Singh (Faridabad)": {
      lat: 28.3398,
      lng: 77.3317,
      connections: {
        "Sant Surdas (Sihi) (Faridabad)": { distance: 1.7, time: 3, fare: 0, line: "Violet Line" }
      }
    },

    // ==========================================
    // MAGENTA LINE CORRIDOR (DMRC)
    // ==========================================
    "Panchsheel Park": {
      lat: 28.5422,
      lng: 77.2185,
      connections: {
        "Hauz Khas": { distance: 1.5, time: 3, fare: 0, line: "Magenta Line" }
      }
    },
    "Palam": {
      lat: 28.5861,
      lng: 77.085,
      connections: {
        "Janakpuri West": { distance: 2.0, time: 4, fare: 0, line: "Magenta Line" }
      }
    },

    // ==========================================
    // RED LINE CORRIDOR (DMRC)
    // ==========================================
    "Welcome": {
      lat: 28.6718,
      lng: 77.2775,
      connections: {
        "Kashmere Gate": { distance: 4.5, time: 8, fare: 0, line: "Red Line" },
        "Dilshad Garden": { distance: 3.5, time: 6, fare: 0, line: "Red Line" }
      }
    },
    "Dilshad Garden": {
      lat: 28.6759,
      lng: 77.3214,
      connections: {
        "Welcome": { distance: 3.5, time: 6, fare: 0, line: "Red Line" }
      }
    },

    // ==========================================
    // GREEN LINE CORRIDOR & BAHADURGARH (INTEGRATED)
    // ==========================================
    "Ashok Park Main": {
      lat: 28.6715,
      lng: 77.1552,
      connections: {
        "Kirti Nagar": { distance: 3.0, time: 6, fare: 0, line: "Green Line" },
        "Mundka": { distance: 8.5, time: 14, fare: 0, line: "Green Line" }
      }
    },
    "Mundka": {
      lat: 28.6832,
      lng: 77.0313,
      connections: {
        "Ashok Park Main": { distance: 8.5, time: 14, fare: 0, line: "Green Line" },
        "Mundka Industrial Area": { distance: 1.3, time: 2, fare: 0, line: "Green Line" }
      }
    },
    "Mundka Industrial Area": {
      lat: 28.6834,
      lng: 77.0171,
      connections: {
        "Mundka": { distance: 1.3, time: 2, fare: 0, line: "Green Line" },
        "Ghevra": { distance: 2.1, time: 3, fare: 0, line: "Green Line" }
      }
    },
    "Ghevra": {
      lat: 28.6853,
      lng: 76.9936,
      connections: {
        "Mundka Industrial Area": { distance: 2.1, time: 3, fare: 0, line: "Green Line" },
        "Tikri Kalan": { distance: 1.8, time: 3, fare: 0, line: "Green Line" }
      }
    },
    "Tikri Kalan": {
      lat: 28.6869,
      lng: 76.9772,
      connections: {
        "Ghevra": { distance: 1.8, time: 3, fare: 0, line: "Green Line" },
        "Tikri Border": { distance: 1.3, time: 2, fare: 0, line: "Green Line" }
      }
    },
    "Tikri Border": {
      lat: 28.6879,
      lng: 76.9638,
      connections: {
        "Tikri Kalan": { distance: 1.3, time: 2, fare: 0, line: "Green Line" },
        "Pandit Shree Ram Sharma (Bahadurgarh)": { distance: 1.3, time: 2, fare: 0, line: "Green Line" }
      }
    },
    "Pandit Shree Ram Sharma (Bahadurgarh)": {
      lat: 28.6892,
      lng: 76.9511,
      connections: {
        "Tikri Border": { distance: 1.3, time: 2, fare: 0, line: "Green Line" },
        "Bahadurgarh City (Bahadurgarh)": { distance: 1.5, time: 3, fare: 0, line: "Green Line" }
      }
    },
    "Bahadurgarh City (Bahadurgarh)": {
      lat: 28.6908,
      lng: 76.9353,
      connections: {
        "Pandit Shree Ram Sharma (Bahadurgarh)": { distance: 1.5, time: 3, fare: 0, line: "Green Line" },
        "Brigadier Hoshiar Singh (Bahadurgarh)": { distance: 1.8, time: 3, fare: 0, line: "Green Line" }
      }
    },
    "Brigadier Hoshiar Singh (Bahadurgarh)": {
      lat: 28.6974,
      lng: 76.9191,
      connections: {
        "Bahadurgarh City (Bahadurgarh)": { distance: 1.8, time: 3, fare: 0, line: "Green Line" }
      }
    },

    // ==========================================
    // AIRPORT EXPRESS CORRIDOR
    // ==========================================
    "IGI Airport": {
      lat: 28.5569,
      lng: 77.0867,
      connections: {
        "Dwarka Sector 21": { distance: 3.5, time: 5, fare: 0, line: "Airport Express" },
        "Delhi Aerocity": { distance: 2.5, time: 4, fare: 0, line: "Airport Express" }
      }
    },
    "Delhi Aerocity": {
      lat: 28.5488,
      lng: 77.1209,
      connections: {
        "IGI Airport": { distance: 2.5, time: 4, fare: 0, line: "Airport Express" },
        "Dhaula Kuan": { distance: 5.0, time: 8, fare: 0, line: "Airport Express" }
      }
    },
    "Dhaula Kuan": {
      lat: 28.5918,
      lng: 77.1615,
      connections: {
        "Delhi Aerocity": { distance: 5.0, time: 8, fare: 0, line: "Airport Express" },
        "Shivaji Stadium": { distance: 4.5, time: 7, fare: 0, line: "Airport Express" },
        "Durgabai Deshmukh South Campus": { distance: 1.2, time: 5, fare: 0, line: "Pink Line" }
      }
    },
    "Shivaji Stadium": {
      lat: 28.629,
      lng: 77.2119,
      connections: {
        "Dhaula Kuan": { distance: 4.5, time: 7, fare: 0, line: "Airport Express" },
        "New Delhi": { distance: 1.8, time: 3, fare: 0, line: "Airport Express" }
      }
    },
    "Durgabai Deshmukh South Campus": {
      lat: 28.5833,
      lng: 77.1647,
      connections: {
        "Dhaula Kuan": { distance: 1.2, time: 5, fare: 0, line: "Pink Line" }
      }
    }
  },
  "Jaipur": {
    // --- CORRIDOR 1 (PINK LINE) ---
    "Mansarovar": {
      lat: 26.8775,
      lng: 75.7538,
      connections: {
        "New Aatish Market": { distance: 1.3, time: 3, fare: 12, line: "Pink Line" }
      }
    },
    "New Aatish Market": {
      lat: 26.8845,
      lng: 75.7645,
      connections: {
        "Mansarovar": { distance: 1.3, time: 3, fare: 12, line: "Pink Line" },
        "Vivek Vihar": { distance: 1.0, time: 2, fare: 12, line: "Pink Line" }
      }
    },
    "Vivek Vihar": {
      lat: 26.8906,
      lng: 75.7725,
      connections: {
        "New Aatish Market": { distance: 1.0, time: 2, fare: 12, line: "Pink Line" },
        "Shyam Nagar": { distance: 1.1, time: 2, fare: 12, line: "Pink Line" }
      }
    },
    "Shyam Nagar": {
      lat: 26.8972,
      lng: 75.7779,
      connections: {
        "Vivek Vihar": { distance: 1.1, time: 2, fare: 12, line: "Pink Line" },
        "Ram Nagar": { distance: 1.0, time: 2, fare: 12, line: "Pink Line" }
      }
    },
    "Ram Nagar": {
      lat: 26.9042,
      lng: 75.7824,
      connections: {
        "Shyam Nagar": { distance: 1.0, time: 2, fare: 12, line: "Pink Line" },
        "Civil Lines": { distance: 0.9, time: 2, fare: 12, line: "Pink Line" }
      }
    },
    "Civil Lines": {
      lat: 26.9103,
      lng: 75.7876,
      connections: {
        "Ram Nagar": { distance: 0.9, time: 2, fare: 12, line: "Pink Line" },
        "Railway Station": { distance: 1.2, time: 3, fare: 18, line: "Pink Line" }
      }
    },
    "Railway Station": {
      lat: 26.9189,
      lng: 75.7952,
      connections: {
        "Civil Lines": { distance: 1.2, time: 3, fare: 18, line: "Pink Line" },
        "Sindhi Camp": { distance: 1.1, time: 2, fare: 18, line: "Pink Line" }
      }
    },
    "Sindhi Camp": {
      lat: 26.9242,
      lng: 75.8016,
      connections: {
        // Pink Line connections
        "Railway Station": { distance: 1.1, time: 2, fare: 18, line: "Pink Line" },
        "Chandpole": { distance: 0.8, time: 2, fare: 12, line: "Pink Line" },
        // Orange Line connections (Interchange)
        "Subhash Nagar": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" },
        "Govt Hostel": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Chandpole": {
      lat: 26.9264,
      lng: 75.8075,
      connections: {
        "Sindhi Camp": { distance: 0.8, time: 2, fare: 12, line: "Pink Line" },
        "Chhoti Chaupar": { distance: 1.0, time: 2, fare: 12, line: "Pink Line" }
      }
    },
    "Chhoti Chaupar": {
      lat: 26.9247,
      lng: 75.8185,
      connections: {
        "Chandpole": { distance: 1.0, time: 2, fare: 12, line: "Pink Line" },
        "Badi Chaupar": { distance: 0.8, time: 2, fare: 12, line: "Pink Line" }
      }
    },
    "Badi Chaupar": {
      lat: 26.9230,
      lng: 75.8268,
      connections: {
        "Chhoti Chaupar": { distance: 0.8, time: 2, fare: 12, line: "Pink Line" }
      }
    },

    // --- CORRIDOR 2 (ORANGE LINE) ---
    "Ambabadi": {
      lat: 26.9427,
      lng: 75.7865,
      connections: {
        "Pani Pech": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Pani Pech": {
      lat: 26.9351,
      lng: 75.7946,
      connections: {
        "Ambabadi": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Subhash Nagar": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Subhash Nagar": {
      lat: 26.9298,
      lng: 75.7981,
      connections: {
        "Pani Pech": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" },
        "Sindhi Camp": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Govt Hostel": {
      lat: 26.9185,
      lng: 75.8028,
      connections: {
        "Sindhi Camp": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" },
        "Ajmeri Gate": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Ajmeri Gate": {
      lat: 26.9150,
      lng: 75.8115,
      connections: {
        "Govt Hostel": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" },
        "SMS Hospital": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "SMS Hospital": {
      lat: 26.9073,
      lng: 75.8156,
      connections: {
        "Ajmeri Gate": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" },
        "Narayan Singh Circle": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Narayan Singh Circle": {
      lat: 26.8995,
      lng: 75.8182,
      connections: {
        "SMS Hospital": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" },
        "S Mansingh Stadium": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "S Mansingh Stadium": {
      lat: 26.8920,
      lng: 75.8155,
      connections: {
        "Narayan Singh Circle": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" },
        "Gandhi Nagar Mode": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Gandhi Nagar Mode": {
      lat: 26.8845,
      lng: 75.8122,
      connections: {
        "S Mansingh Stadium": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" },
        "Tonk Pathak": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Tonk Pathak": {
      lat: 26.8770,
      lng: 75.8088,
      connections: {
        "Gandhi Nagar Mode": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" },
        "Bajaj Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Bajaj Nagar": {
      lat: 26.8680,
      lng: 75.8062,
      connections: {
        "Tonk Pathak": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Jawahar Kala Kendra": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Jawahar Kala Kendra": {
      lat: 26.8605,
      lng: 75.8105,
      connections: {
        "Bajaj Nagar": { distance: 0.9, time: 2, fare: 12, line: "Orange Line" },
        "Malviya Nagar": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Malviya Nagar": {
      lat: 26.8525,
      lng: 75.8115,
      connections: {
        "Jawahar Kala Kendra": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" },
        "WT Park": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "WT Park": {
      lat: 26.8435,
      lng: 75.8025,
      connections: {
        "Malviya Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Fortis": { distance: 0.7, time: 1, fare: 10, line: "Orange Line" }
      }
    },
    "Fortis": {
      lat: 26.8375,
      lng: 75.8015,
      connections: {
        "WT Park": { distance: 0.7, time: 1, fare: 10, line: "Orange Line" },
        "EP Station": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "EP Station": {
      lat: 26.8285,
      lng: 75.8025,
      connections: {
        "Fortis": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Durgapura": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Durgapura": {
      lat: 26.8222,
      lng: 75.8028,
      connections: {
        "EP Station": { distance: 0.8, time: 2, fare: 12, line: "Orange Line" },
        "Laxmi Nagar": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Laxmi Nagar": {
      lat: 26.8122,
      lng: 75.8035,
      connections: {
        "Durgapura": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" },
        "Sanganer": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Sanganer": {
      lat: 26.8025,
      lng: 75.8042,
      connections: {
        "Laxmi Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Haldi Ghati Gate": { distance: 1.2, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Haldi Ghati Gate": {
      lat: 26.7925,
      lng: 75.8110,
      connections: {
        "Sanganer": { distance: 1.2, time: 2, fare: 12, line: "Orange Line" },
        "Pratap Nagar": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Pratap Nagar": {
      lat: 26.7835,
      lng: 75.8185,
      connections: {
        "Haldi Ghati Gate": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" },
        "India Gate": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "India Gate": {
      lat: 26.7745,
      lng: 75.8242,
      connections: {
        "Pratap Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Sitapura Industrial Area": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Sitapura Industrial Area": {
      lat: 26.7655,
      lng: 75.8295,
      connections: {
        "India Gate": { distance: 1.0, time: 2, fare: 12, line: "Orange Line" }
      }
    }
  },
  "Mumbai": {
    "Aarey": {
      lat: 19.1595,
      lng: 72.8622,
      connections: {
        "Jogeshwari East": { distance: 1.8, time: 3, fare: 20, line: "Red Line" },
        "Dindoshi": { distance: 1.4, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "Airport Road": {
      lat: 19.1105,
      lng: 72.8746,
      connections: {
        "Chakala": { distance: 0.6, time: 2, fare: 10, line: "Blue Line 1" },
        "Marol Naka": { distance: 0.8, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Akurli": {
      lat: 19.1995,
      lng: 72.8592,
      connections: {
        "Kurar": { distance: 1.8, time: 3, fare: 20, line: "Red Line" },
        "Poisar": { distance: 0.8, time: 2, fare: 10, line: "Red Line" }
      }
    },
    "Anand Nagar": {
      lat: 19.2575,
      lng: 72.8625,
      connections: {
        "Kandarpada": { distance: 1.0, time: 2, fare: 10, line: "Yellow Line" },
        "Dahisar East": { distance: 0.7, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Andheri": {
      lat: 19.1197,
      lng: 72.8468,
      connections: {
        "Azad Nagar": { distance: 0.7, time: 2, fare: 10, line: "Blue Line 1" },
        "Western Express Highway": { distance: 1.1, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Asalpha": {
      lat: 19.0965,
      lng: 72.897,
      connections: {
        "Saki Naka": { distance: 1.2, time: 2, fare: 20, line: "Blue Line 1" },
        "Jagruti Nagar": { distance: 0.7, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Azad Nagar": {
      lat: 19.1218,
      lng: 72.8407,
      connections: {
        "DN Nagar": { distance: 1.0, time: 2, fare: 10, line: "Blue Line 1" },
        "Andheri": { distance: 0.7, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Bangur Nagar": {
      lat: 19.1654,
      lng: 72.8258,
      connections: {
        "Goregaon West": { distance: 1.2, time: 2, fare: 10, line: "Yellow Line" },
        "Malad West": { distance: 1.7, time: 3, fare: 20, line: "Yellow Line" }
      }
    },
    "Borivali West": {
      lat: 19.2272,
      lng: 72.8335,
      connections: {
        "Shimpoli": { distance: 1.4, time: 2, fare: 20, line: "Yellow Line" },
        "Eksar": { distance: 1.3, time: 2, fare: 20, line: "Yellow Line" }
      }
    },
    "Chakala": {
      lat: 19.1114,
      lng: 72.8687,
      connections: {
        "Western Express Highway": { distance: 1.4, time: 2, fare: 20, line: "Blue Line 1" },
        "Airport Road": { distance: 0.6, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "DN Nagar": {
      lat: 19.1245,
      lng: 72.8315,
      connections: {
        "Versova": { distance: 0.9, time: 2, fare: 10, line: "Blue Line 1" },
        "Azad Nagar": { distance: 1.0, time: 2, fare: 10, line: "Blue Line 1" },
        "Lower Oshiwara": { distance: 1.4, time: 2, fare: 20, line: "Yellow Line" }
      }
    },
    "Dahanukarwadi": {
      lat: 19.1992,
      lng: 72.8244,
      connections: {
        "Valnai": { distance: 1.1, time: 2, fare: 10, line: "Yellow Line" },
        "Kandivali West": { distance: 0.8, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Dahisar East": {
      lat: 19.2625,
      lng: 72.8665,
      connections: {
        "Anand Nagar": { distance: 0.7, time: 2, fare: 10, line: "Yellow Line" },
        "Ovaripada": { distance: 1.4, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "Devipada": {
      lat: 19.2295,
      lng: 72.8558,
      connections: {
        "Magathane": { distance: 1.1, time: 2, fare: 10, line: "Red Line" },
        "National Park": { distance: 1.1, time: 2, fare: 10, line: "Red Line" }
      }
    },
    "Dindoshi": {
      lat: 19.1722,
      lng: 72.8612,
      connections: {
        "Aarey": { distance: 1.4, time: 3, fare: 20, line: "Red Line" },
        "Kurar": { distance: 1.3, time: 2, fare: 20, line: "Red Line" }
      }
    },
    "Eksar": {
      lat: 19.2361,
      lng: 72.8415,
      connections: {
        "Borivali West": { distance: 1.3, time: 2, fare: 20, line: "Yellow Line" },
        "Mandapeshwar": { distance: 1.2, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Ghatkopar": {
      lat: 19.086,
      lng: 72.9107,
      connections: {
        "Jagruti Nagar": { distance: 1.2, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Goregaon West": {
      lat: 19.1551,
      lng: 72.8268,
      connections: {
        "Oshiwara": { distance: 1.3, time: 2, fare: 20, line: "Yellow Line" },
        "Bangur Nagar": { distance: 1.2, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Gundavali": {
      lat: 19.1172,
      lng: 72.857,
      connections: {
        "Mogra": { distance: 1.3, time: 2, fare: 20, line: "Red Line" },
        "Western Express Highway": { distance: 0.1, time: 3, fare: 0, line: "Interchange Walkway" }
      }
    },
    "Jagruti Nagar": {
      lat: 19.0925,
      lng: 72.902,
      connections: {
        "Asalpha": { distance: 0.7, time: 2, fare: 10, line: "Blue Line 1" },
        "Ghatkopar": { distance: 1.2, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Jogeshwari East": {
      lat: 19.1435,
      lng: 72.8632,
      connections: {
        "Mogra": { distance: 1.7, time: 3, fare: 20, line: "Red Line" },
        "Aarey": { distance: 1.8, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "Kandarpada": {
      lat: 19.2512,
      lng: 72.8562,
      connections: {
        "Mandapeshwar": { distance: 1.1, time: 2, fare: 10, line: "Yellow Line" },
        "Anand Nagar": { distance: 1.0, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Kandivali West": {
      lat: 19.2065,
      lng: 72.8262,
      connections: {
        "Dahanukarwadi": { distance: 0.8, time: 2, fare: 10, line: "Yellow Line" },
        "Shimpoli": { distance: 1.0, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Kurar": {
      lat: 19.1835,
      lng: 72.8605,
      connections: {
        "Dindoshi": { distance: 1.3, time: 2, fare: 20, line: "Red Line" },
        "Akurli": { distance: 1.8, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "Lower Oshiwara": {
      lat: 19.1368,
      lng: 72.8295,
      connections: {
        "DN Nagar": { distance: 1.4, time: 2, fare: 20, line: "Yellow Line" },
        "Oshiwara": { distance: 0.7, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Magathane": {
      lat: 19.2198,
      lng: 72.8562,
      connections: {
        "Poisar": { distance: 1.5, time: 3, fare: 20, line: "Red Line" },
        "Devipada": { distance: 1.1, time: 2, fare: 10, line: "Red Line" }
      }
    },
    "Malad West": {
      lat: 19.1802,
      lng: 72.8245,
      connections: {
        "Bangur Nagar": { distance: 1.7, time: 3, fare: 20, line: "Yellow Line" },
        "Valnai": { distance: 1.0, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Mandapeshwar": {
      lat: 19.2435,
      lng: 72.8492,
      connections: {
        "Eksar": { distance: 1.2, time: 2, fare: 10, line: "Yellow Line" },
        "Kandarpada": { distance: 1.1, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Marol Naka": {
      lat: 19.1099,
      lng: 72.8825,
      connections: {
        "Airport Road": { distance: 0.8, time: 2, fare: 10, line: "Blue Line 1" },
        "Saki Naka": { distance: 0.9, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Mogra": {
      lat: 19.1285,
      lng: 72.8615,
      connections: {
        "Gundavali": { distance: 1.3, time: 2, fare: 20, line: "Red Line" },
        "Jogeshwari East": { distance: 1.7, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "National Park": {
      lat: 19.2392,
      lng: 72.8572,
      connections: {
        "Devipada": { distance: 1.1, time: 2, fare: 10, line: "Red Line" },
        "Ovaripada": { distance: 1.4, time: 2, fare: 20, line: "Red Line" }
      }
    },
    "Oshiwara": {
      lat: 19.1432,
      lng: 72.8281,
      connections: {
        "Lower Oshiwara": { distance: 0.7, time: 2, fare: 10, line: "Yellow Line" },
        "Goregaon West": { distance: 1.3, time: 2, fare: 20, line: "Yellow Line" }
      }
    },
    "Ovaripada": {
      lat: 19.251,
      lng: 72.8605,
      connections: {
        "National Park": { distance: 1.4, time: 2, fare: 20, line: "Red Line" },
        "Dahisar East": { distance: 1.4, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "Poisar": {
      lat: 19.2065,
      lng: 72.8578,
      connections: {
        "Akurli": { distance: 0.8, time: 2, fare: 10, line: "Red Line" },
        "Magathane": { distance: 1.5, time: 3, fare: 20, line: "Red Line" }
      }
    },
    "Saki Naka": {
      lat: 19.1035,
      lng: 72.888,
      connections: {
        "Marol Naka": { distance: 0.9, time: 2, fare: 10, line: "Blue Line 1" },
        "Asalpha": { distance: 1.2, time: 2, fare: 20, line: "Blue Line 1" }
      }
    },
    "Shimpoli": {
      lat: 19.2155,
      lng: 72.829,
      connections: {
        "Kandivali West": { distance: 1.0, time: 2, fare: 10, line: "Yellow Line" },
        "Borivali West": { distance: 1.4, time: 2, fare: 20, line: "Yellow Line" }
      }
    },
    "Valnai": {
      lat: 19.1895,
      lng: 72.8242,
      connections: {
        "Malad West": { distance: 1.0, time: 2, fare: 10, line: "Yellow Line" },
        "Dahanukarwadi": { distance: 1.1, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Versova": {
      lat: 19.1314,
      lng: 72.8271,
      connections: {
        "DN Nagar": { distance: 0.9, time: 2, fare: 10, line: "Blue Line 1" }
      }
    },
    "Western Express Highway": {
      lat: 19.1158,
      lng: 72.8564,
      connections: {
        "Andheri": { distance: 1.1, time: 2, fare: 10, line: "Blue Line 1" },
        "Chakala": { distance: 1.4, time: 2, fare: 20, line: "Blue Line 1" },
        "Gundavali": { distance: 0.1, time: 3, fare: 0, line: "Interchange Walkway" }
      }
    },
  },
  "Kanpur": {
    "Agriculture University": {
      lat: 26.4955,
      lng: 80.3065,
      connections: {
        "Rawatpur": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Bada Chauraha": {
      lat: 26.4705,
      lng: 80.3525,
      connections: {
        "Naveen Market": { distance: 0.9, time: 2, fare: 10, line: "Orange Line" },
        "Nayaganj": { distance: 0.9, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Bara Devi": {
      lat: 26.4295,
      lng: 80.3305,
      connections: {
        "Kidwai Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Transport Nagar": { distance: 1.0, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Barra-7": {
      lat: 26.4345,
      lng: 80.2885,
      connections: {
        "Barra-8": { distance: 0.7, time: 1, fare: 10, line: "Blue Line" },
        "Shastri Chowk": { distance: 0.7, time: 1, fare: 10, line: "Blue Line" }
      }
    },
    "Barra-8": {
      lat: 26.4275,
      lng: 80.2885,
      connections: {
        "Barra-7": { distance: 0.7, time: 1, fare: 10, line: "Blue Line" }
      }
    },
    "Baudh Nagar": {
      lat: 26.3995,
      lng: 80.3425,
      connections: {
        "Naubasta": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Vasant Vihar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "CSJM University": {
      lat: 26.4831,
      lng: 80.2789,
      connections: {
        "Gurudev": { distance: 1.1, time: 2, fare: 10, line: "Orange Line" },
        "SPM Hospital": { distance: 1.5, time: 3, fare: 15, line: "Orange Line" }
      }
    },
    "Chunniganj": {
      lat: 26.4785,
      lng: 80.3325,
      connections: {
        "Moti Jheel": { distance: 1.3, time: 2, fare: 12, line: "Orange Line" },
        "Naveen Market": { distance: 1.2, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Double Pulia": {
      lat: 26.4655,
      lng: 80.2945,
      connections: {
        "Kakadeo": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Vijay Nagar Chauraha": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Geeta Nagar": {
      lat: 26.4815,
      lng: 80.3015,
      connections: {
        "Gurudev": { distance: 1.3, time: 2, fare: 10, line: "Orange Line" },
        "Rawatpur": { distance: 1.1, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Govind Nagar": {
      lat: 26.4495,
      lng: 80.2885,
      connections: {
        "Shastri Chowk": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" },
        "Vijay Nagar Chauraha": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Gurudev": {
      lat: 26.4764,
      lng: 80.2891,
      connections: {
        "CSJM University": { distance: 1.1, time: 2, fare: 10, line: "Orange Line" },
        "Geeta Nagar": { distance: 1.3, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "IIT Kanpur": {
      lat: 26.5161,
      lng: 80.2335,
      connections: {
        "Kalyanpur": { distance: 2.5, time: 4, fare: 15, line: "Orange Line" }
      }
    },
    "Jhakarkati Bus Terminal": {
      lat: 26.4465,
      lng: 80.3375,
      connections: {
        "Kanpur Central": { distance: 1.4, time: 2, fare: 12, line: "Orange Line" },
        "Transport Nagar": { distance: 1.0, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Kakadeo": {
      lat: 26.4725,
      lng: 80.3015,
      connections: {
        "Double Pulia": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Rawatpur": { distance: 1.2, time: 2, fare: 12, line: "Blue Line" }
      }
    },
    "Kalyanpur": {
      lat: 26.4996,
      lng: 80.2541,
      connections: {
        "IIT Kanpur": { distance: 2.5, time: 4, fare: 15, line: "Orange Line" },
        "SPM Hospital": { distance: 1.4, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Kanpur Central": {
      lat: 26.4555,
      lng: 80.3485,
      connections: {
        "Jhakarkati Bus Terminal": { distance: 1.4, time: 2, fare: 12, line: "Orange Line" },
        "Nayaganj": { distance: 1.4, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Kidwai Nagar": {
      lat: 26.4195,
      lng: 80.3345,
      connections: {
        "Bara Devi": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Vasant Vihar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "LLR Hospital": {
      lat: 26.4794,
      lng: 80.3115,
      connections: {
        "Moti Jheel": { distance: 0.6, time: 1, fare: 10, line: "Orange Line" },
        "Rawatpur": { distance: 0.8, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Moti Jheel": {
      lat: 26.4795,
      lng: 80.3248,
      connections: {
        "Chunniganj": { distance: 1.3, time: 2, fare: 12, line: "Orange Line" },
        "LLR Hospital": { distance: 0.6, time: 1, fare: 10, line: "Orange Line" }
      }
    },
    "Naubasta": {
      lat: 26.3895,
      lng: 80.3465,
      connections: {
        "Baudh Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Naveen Market": {
      lat: 26.4745,
      lng: 80.3445,
      connections: {
        "Bada Chauraha": { distance: 0.9, time: 2, fare: 10, line: "Orange Line" },
        "Chunniganj": { distance: 1.2, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Nayaganj": {
      lat: 26.4645,
      lng: 80.3595,
      connections: {
        "Bada Chauraha": { distance: 0.9, time: 2, fare: 10, line: "Orange Line" },
        "Kanpur Central": { distance: 1.4, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Rawatpur": {
      lat: 26.4782,
      lng: 80.3114,
      connections: {
        "Agriculture University": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" },
        "Geeta Nagar": { distance: 1.1, time: 2, fare: 10, line: "Orange Line" },
        "Kakadeo": { distance: 1.2, time: 2, fare: 12, line: "Blue Line" },
        "LLR Hospital": { distance: 0.8, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "SPM Hospital": {
      lat: 26.4915,
      lng: 80.2662,
      connections: {
        "CSJM University": { distance: 1.5, time: 3, fare: 15, line: "Orange Line" },
        "Kalyanpur": { distance: 1.4, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Shastri Chowk": {
      lat: 26.4415,
      lng: 80.2885,
      connections: {
        "Barra-7": { distance: 0.7, time: 1, fare: 10, line: "Blue Line" },
        "Govind Nagar": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Transport Nagar": {
      lat: 26.4385,
      lng: 80.3325,
      connections: {
        "Bara Devi": { distance: 1.0, time: 2, fare: 10, line: "Orange Line" },
        "Jhakarkati Bus Terminal": { distance: 1.0, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Vasant Vihar": {
      lat: 26.4095,
      lng: 80.3385,
      connections: {
        "Baudh Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" },
        "Kidwai Nagar": { distance: 1.1, time: 2, fare: 12, line: "Orange Line" }
      }
    },
    "Vijay Nagar Chauraha": {
      lat: 26.4585,
      lng: 80.2885,
      connections: {
        "Double Pulia": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Govind Nagar": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" }
      }
    },
  },
  "Hyderabad": {
    "Ameerpet": {
      lat: 17.4375,
      lng: 78.4483,
      connections: {
        "Begumpet": { distance: 1.4, time: 3, fare: 10, line: "Blue Line" },
        "Madhura Nagar": { distance: 0.6, time: 1, fare: 10, line: "Blue Line" },
        "Punjagutta": { distance: 1.3, time: 2, fare: 10, line: "Red Line" },
        "SR Nagar": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Assembly": {
      lat: 17.3995,
      lng: 78.4715,
      connections: {
        "Lakdikapul": { distance: 0.8, time: 1, fare: 10, line: "Red Line" },
        "Nampally": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Balanagar": {
      lat: 17.4646,
      lng: 78.4116,
      connections: {
        "Kukatpally": { distance: 2.1, time: 4, fare: 20, line: "Red Line" },
        "Moosapet": { distance: 0.8, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Begumpet": {
      lat: 17.4424,
      lng: 78.459,
      connections: {
        "Ameerpet": { distance: 1.4, time: 3, fare: 10, line: "Blue Line" },
        "Prakash Nagar": { distance: 1.3, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Bharat Nagar": {
      lat: 17.458,
      lng: 78.423,
      connections: {
        "Erragadda": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Moosapet": { distance: 0.6, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Chaitanyapuri": {
      lat: 17.3645,
      lng: 78.5345,
      connections: {
        "Dilsukhnagar": { distance: 1.1, time: 2, fare: 10, line: "Red Line" },
        "Victoria Memorial": { distance: 1.5, time: 3, fare: 10, line: "Red Line" },
      }
    },
    "Chikkadpally": {
      lat: 17.402,
      lng: 78.4965,
      connections: {
        "RTC X Roads": { distance: 0.8, time: 1, fare: 10, line: "Green Line" },
        "Narayanguda": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Dilsukhnagar": {
      lat: 17.3685,
      lng: 78.525,
      connections: {
        "Chaitanyapuri": { distance: 1.1, time: 2, fare: 10, line: "Red Line" },
        "Musarambagh": { distance: 1.3, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Durgam Cheruvu": {
      lat: 17.4435,
      lng: 78.3875,
      connections: {
        "HITEC City": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
        "Madhapur": { distance: 0.5, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "ESI Hospital": {
      lat: 17.447,
      lng: 78.434,
      connections: {
        "Erragadda": { distance: 0.8, time: 1, fare: 10, line: "Red Line" },
        "SR Nagar": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Erragadda": {
      lat: 17.452,
      lng: 78.4285,
      connections: {
        "Bharat Nagar": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "ESI Hospital": { distance: 0.8, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Gandhi Bhavan": {
      lat: 17.3855,
      lng: 78.475,
      connections: {
        "Nampally": { distance: 0.7, time: 1, fare: 10, line: "Red Line" },
        "Osmania Medical College": { distance: 0.7, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Gandhi Hospital": {
      lat: 17.4255,
      lng: 78.502,
      connections: {
        "Musheerabad": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Secunderabad West": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "HITEC City": {
      lat: 17.4485,
      lng: 78.3815,
      connections: {
        "Durgam Cheruvu": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
        "Raidurg": { distance: 0.8, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Habsiguda": {
      lat: 17.4175,
      lng: 78.552,
      connections: {
        "NGRI": { distance: 1.3, time: 2, fare: 10, line: "Blue Line" },
        "Tarnaka": { distance: 2.0, time: 4, fare: 10, line: "Blue Line" },
      }
    },
    "Irrum Manzil": {
      lat: 17.419,
      lng: 78.457,
      connections: {
        "Khairatabad": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Punjagutta": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "JBS Parade Ground": {
      lat: 17.4431,
      lng: 78.5015,
      connections: {
        "Parade Ground": { distance: 0.1, time: 2, fare: 0, line: "Interchange Walkway" },
        "Secunderabad West": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "JNTU College": {
      lat: 17.4851,
      lng: 78.3551,
      connections: {
        "KPHB Colony": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Miyapur": { distance: 1.6, time: 3, fare: 15, line: "Red Line" },
      }
    },
    "Jubilee Hills Check Post": {
      lat: 17.4305,
      lng: 78.4125,
      connections: {
        "Peddamma Gudi": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Road No 5 Jubilee Hills": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "KPHB Colony": {
      lat: 17.4819,
      lng: 78.3615,
      connections: {
        "JNTU College": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Kukatpally": { distance: 1.5, time: 3, fare: 15, line: "Red Line" },
      }
    },
    "Khairatabad": {
      lat: 17.4115,
      lng: 78.46,
      connections: {
        "Irrum Manzil": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Lakdikapul": { distance: 1.2, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Kukatpally": {
      lat: 17.4725,
      lng: 78.3756,
      connections: {
        "Balanagar": { distance: 2.1, time: 4, fare: 20, line: "Red Line" },
        "KPHB Colony": { distance: 1.5, time: 3, fare: 15, line: "Red Line" },
      }
    },
    "LB Nagar": {
      lat: 17.346,
      lng: 78.548,
      connections: {
        "Victoria Memorial": { distance: 1.1, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Lakdikapul": {
      lat: 17.4015,
      lng: 78.4645,
      connections: {
        "Assembly": { distance: 0.8, time: 1, fare: 10, line: "Red Line" },
        "Khairatabad": { distance: 1.2, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "MGBS": {
      lat: 17.3786,
      lng: 78.4818,
      connections: {
        "Malakpet": { distance: 1.6, time: 3, fare: 10, line: "Red Line" },
        "Osmania Medical College": { distance: 0.4, time: 1, fare: 10, line: "Red Line" },
        "Sultan Bazaar": { distance: 0.9, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Madhapur": {
      lat: 17.4419,
      lng: 78.3912,
      connections: {
        "Durgam Cheruvu": { distance: 0.5, time: 1, fare: 10, line: "Blue Line" },
        "Peddamma Gudi": { distance: 1.6, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Madhura Nagar": {
      lat: 17.4355,
      lng: 78.443,
      connections: {
        "Ameerpet": { distance: 0.6, time: 1, fare: 10, line: "Blue Line" },
        "Yousufguda": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Malakpet": {
      lat: 17.373,
      lng: 78.495,
      connections: {
        "MGBS": { distance: 1.6, time: 3, fare: 10, line: "Red Line" },
        "New Market": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Mettuguda": {
      lat: 17.4315,
      lng: 78.5195,
      connections: {
        "Secunderabad East": { distance: 1.8, time: 3, fare: 10, line: "Blue Line" },
        "Tarnaka": { distance: 1.9, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Miyapur": {
      lat: 17.4968,
      lng: 78.3483,
      connections: {
        "JNTU College": { distance: 1.6, time: 3, fare: 15, line: "Red Line" },
      }
    },
    "Moosapet": {
      lat: 17.4621,
      lng: 78.419,
      connections: {
        "Balanagar": { distance: 0.8, time: 1, fare: 10, line: "Red Line" },
        "Bharat Nagar": { distance: 0.6, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Musarambagh": {
      lat: 17.3715,
      lng: 78.5135,
      connections: {
        "Dilsukhnagar": { distance: 1.3, time: 2, fare: 10, line: "Red Line" },
        "New Market": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Musheerabad": {
      lat: 17.4175,
      lng: 78.5075,
      connections: {
        "Gandhi Hospital": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "RTC X Roads": { distance: 1.3, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "NGRI": {
      lat: 17.4095,
      lng: 78.562,
      connections: {
        "Habsiguda": { distance: 1.3, time: 2, fare: 10, line: "Blue Line" },
        "Stadium": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Nagole": {
      lat: 17.398,
      lng: 78.567,
      connections: {
        "Uppal": { distance: 0.7, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Nampally": {
      lat: 17.3915,
      lng: 78.4755,
      connections: {
        "Assembly": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
        "Gandhi Bhavan": { distance: 0.7, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Narayanguda": {
      lat: 17.394,
      lng: 78.4905,
      connections: {
        "Chikkadpally": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Sultan Bazaar": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "New Market": {
      lat: 17.371,
      lng: 78.504,
      connections: {
        "Malakpet": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
        "Musarambagh": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Osmania Medical College": {
      lat: 17.381,
      lng: 78.4795,
      connections: {
        "Gandhi Bhavan": { distance: 0.7, time: 1, fare: 10, line: "Red Line" },
        "MGBS": { distance: 0.4, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Parade Ground": {
      lat: 17.4415,
      lng: 78.5012,
      connections: {
        "JBS Parade Ground": { distance: 0.1, time: 2, fare: 0, line: "Interchange Walkway" },
        "Paradise": { distance: 0.8, time: 1, fare: 10, line: "Blue Line" },
        "Secunderabad East": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Paradise": {
      lat: 17.4425,
      lng: 78.494,
      connections: {
        "Parade Ground": { distance: 0.8, time: 1, fare: 10, line: "Blue Line" },
        "Rasoolpura": { distance: 1.4, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Peddamma Gudi": {
      lat: 17.435,
      lng: 78.4045,
      connections: {
        "Jubilee Hills Check Post": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Madhapur": { distance: 1.6, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Prakash Nagar": {
      lat: 17.4445,
      lng: 78.4715,
      connections: {
        "Begumpet": { distance: 1.3, time: 2, fare: 10, line: "Blue Line" },
        "Rasoolpura": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Punjagutta": {
      lat: 17.4265,
      lng: 78.4528,
      connections: {
        "Ameerpet": { distance: 1.3, time: 2, fare: 10, line: "Red Line" },
        "Irrum Manzil": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Raidurg": {
      lat: 17.4428,
      lng: 78.3772,
      connections: {
        "HITEC City": { distance: 0.8, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Rasoolpura": {
      lat: 17.4465,
      lng: 78.4815,
      connections: {
        "Paradise": { distance: 1.4, time: 2, fare: 10, line: "Blue Line" },
        "Prakash Nagar": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Road No 5 Jubilee Hills": {
      lat: 17.432,
      lng: 78.423,
      connections: {
        "Jubilee Hills Check Post": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "Yousufguda": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "RTC X Roads": {
      lat: 17.4075,
      lng: 78.5015,
      connections: {
        "Chikkadpally": { distance: 0.8, time: 1, fare: 10, line: "Green Line" },
        "Musheerabad": { distance: 1.3, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "SR Nagar": {
      lat: 17.4425,
      lng: 78.441,
      connections: {
        "Ameerpet": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
        "ESI Hospital": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Secunderabad East": {
      lat: 17.4335,
      lng: 78.5035,
      connections: {
        "Mettuguda": { distance: 1.8, time: 3, fare: 10, line: "Blue Line" },
        "Parade Ground": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Secunderabad West": {
      lat: 17.434,
      lng: 78.4975,
      connections: {
        "Gandhi Hospital": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "JBS Parade Ground": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Stadium": {
      lat: 17.4045,
      lng: 78.555,
      connections: {
        "NGRI": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
        "Uppal": { distance: 0.8, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Sultan Bazaar": {
      lat: 17.386,
      lng: 78.4855,
      connections: {
        "MGBS": { distance: 0.9, time: 2, fare: 10, line: "Green Line" },
        "Narayanguda": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Tarnaka": {
      lat: 17.429,
      lng: 78.5375,
      connections: {
        "Habsiguda": { distance: 2.0, time: 4, fare: 10, line: "Blue Line" },
        "Mettuguda": { distance: 1.9, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Uppal": {
      lat: 17.4015,
      lng: 78.5615,
      connections: {
        "Nagole": { distance: 0.7, time: 1, fare: 10, line: "Blue Line" },
        "Stadium": { distance: 0.8, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Victoria Memorial": {
      lat: 17.3555,
      lng: 78.5445,
      connections: {
        "Chaitanyapuri": { distance: 1.5, time: 3, fare: 10, line: "Red Line" },
        "LB Nagar": { distance: 1.1, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Yousufguda": {
      lat: 17.437,
      lng: 78.4335,
      connections: {
        "Madhura Nagar": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Road No 5 Jubilee Hills": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
      }
    },
  },
  "Bengaluru": {
    "Attiguppe": {
      lat: 12.9616,
      lng: 77.53405,
      connections: {
        "Deepanjali Nagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Vijayanagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "BTM Layout": {
      lat: 12.9189,
      lng: 77.61025,
      connections: {
        "Central Silk Board": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Jayadeva Hospital": { distance: 0.9, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Baiyappanahalli": {
      lat: 12.9907,
      lng: 77.6491,
      connections: {
        "Benniganahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Swami Vivekananda Road": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Banashankari": {
      lat: 12.91353,
      lng: 77.5784,
      connections: {
        "JP Nagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Rashtreeya Vidyalaya Road": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Benniganahalli": {
      lat: 12.99595,
      lng: 77.662,
      connections: {
        "Baiyappanahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Krishnarajapura": { distance: 1.3, time: 2, fare: 12, line: "Purple Line" }
      }
    },
    "Bommanahalli": {
      lat: 12.9054,
      lng: 77.63067,
      connections: {
        "Central Silk Board": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Kudlu Gate": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Bommasandra": {
      lat: 12.8152,
      lng: 77.6931,
      connections: {
        "Hebbagodi": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Central Silk Board": {
      lat: 12.9181,
      lng: 77.62,
      connections: {
        "BTM Layout": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Bommanahalli": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Challaghatta": {
      lat: 12.915,
      lng: 77.469,
      connections: {
        "Kengeri": { distance: 1.5, time: 3, fare: 12, line: "Purple Line" }
      }
    },
    "Chickpet": {
      lat: 12.96864,
      lng: 77.57434,
      connections: {
        "Krishna Rajendra Market": { distance: 0.8, time: 2, fare: 10, line: "Green Line" },
        "Nadaprabhu Kempegowda Station Majestic": { distance: 1.4, time: 3, fare: 10, line: "Green Line" }
      }
    },
    "Chikkabidarakallu": {
      lat: 13.05103,
      lng: 77.47967,
      connections: {
        "Madavara": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Manjunath Nagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "City Railway Station": {
      lat: 12.9749,
      lng: 77.5649,
      connections: {
        "Magadi Road": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Nadaprabhu Kempegowda Station Majestic": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Cubbon Park": {
      lat: 12.97547,
      lng: 77.59825,
      connections: {
        "Dr BR Ambedkar Station": { distance: 0.8, time: 1, fare: 10, line: "Purple Line" },
        "Mahatma Gandhi Road": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Dasarahalli": {
      lat: 13.03578,
      lng: 77.5027,
      connections: {
        "Jalahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Nagasandra": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Deepanjali Nagar": {
      lat: 12.95755,
      lng: 77.53227,
      connections: {
        "Attiguppe": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Mysuru Road": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Doddakallasandra": {
      lat: 12.8834,
      lng: 77.55832,
      connections: {
        "Konanakunte Cross": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Vajarahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Dr BR Ambedkar Station": {
      lat: 12.97555,
      lng: 77.5898,
      connections: {
        "Cubbon Park": { distance: 0.8, time: 1, fare: 10, line: "Purple Line" },
        "Sir M Visvesvaraya Station": { distance: 0.9, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Electronic City": {
      lat: 12.845,
      lng: 77.678,
      connections: {
        "Huskur Road": { distance: 1.6, time: 3, fare: 12, line: "Yellow Line" },
        "Konappana Agrahara": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Garudacharpalya": {
      lat: 12.98792,
      lng: 77.69134,
      connections: {
        "Hoodi": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Singayyanapalya": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Goraguntepalya": {
      lat: 13.02572,
      lng: 77.5407,
      connections: {
        "Peenya": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Yeshwanthpur": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Halasuru": {
      lat: 12.97733,
      lng: 77.62803,
      connections: {
        "Indiranagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Trinity": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Hebbagodi": {
      lat: 12.82513,
      lng: 77.68807,
      connections: {
        "Bommasandra": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Huskur Road": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Hoodi": {
      lat: 12.98128,
      lng: 77.69956,
      connections: {
        "Garudacharpalya": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Seetharampalya": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Hopefarm Channasandra": {
      lat: 12.99142,
      lng: 77.75267,
      connections: {
        "Kadugodi Tree Park": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Whitefield (Kadugodi)": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Hosa Road": {
      lat: 12.86833,
      lng: 77.66067,
      connections: {
        "Konappana Agrahara": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Singasandra": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Hosahalli": {
      lat: 12.9697,
      lng: 77.5376,
      connections: {
        "Magadi Road": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Vijayanagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Huskur Road": {
      lat: 12.83507,
      lng: 77.68303,
      connections: {
        "Electronic City": { distance: 1.6, time: 3, fare: 12, line: "Yellow Line" },
        "Hebbagodi": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Indiranagar": {
      lat: 12.9783,
      lng: 77.6387,
      connections: {
        "Halasuru": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Swami Vivekananda Road": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "JP Nagar": {
      lat: 12.90577,
      lng: 77.5758,
      connections: {
        "Banashankari": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Yelachenahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Jalahalli": {
      lat: 13.03327,
      lng: 77.5122,
      connections: {
        "Dasarahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Peenya Industry": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Jayadeva Hospital": {
      lat: 12.9197,
      lng: 77.6005,
      connections: {
        "BTM Layout": { distance: 0.9, time: 2, fare: 10, line: "Yellow Line" },
        "Ragigudda": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Jayanagar": {
      lat: 12.93085,
      lng: 77.58055,
      connections: {
        "Rashtreeya Vidyalaya Road": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "South End Circle": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Jnanabharathi": {
      lat: 12.937,
      lng: 77.50414,
      connections: {
        "Pattanagere": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Rajarajeshwari Nagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Kadugodi Tree Park": {
      lat: 12.98673,
      lng: 77.74533,
      connections: {
        "Hopefarm Channasandra": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Pattandur Agrahara": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Kengeri": {
      lat: 12.9205,
      lng: 77.47779,
      connections: {
        "Challaghatta": { distance: 1.5, time: 3, fare: 12, line: "Purple Line" },
        "Kengeri Bus Terminal": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Kengeri Bus Terminal": {
      lat: 12.926,
      lng: 77.48657,
      connections: {
        "Kengeri": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Pattanagere": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Konanakunte Cross": {
      lat: 12.8907,
      lng: 77.56576,
      connections: {
        "Doddakallasandra": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Yelachenahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Konappana Agrahara": {
      lat: 12.85667,
      lng: 77.66933,
      connections: {
        "Electronic City": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Hosa Road": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Krishna Rajendra Market": {
      lat: 12.96158,
      lng: 77.57578,
      connections: {
        "Chickpet": { distance: 0.8, time: 2, fare: 10, line: "Green Line" },
        "National College": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Krishnarajapura": {
      lat: 13.0012,
      lng: 77.6749,
      connections: {
        "Benniganahalli": { distance: 1.3, time: 2, fare: 12, line: "Purple Line" },
        "Singayyanapalya": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Kudlu Gate": {
      lat: 12.8927,
      lng: 77.64133,
      connections: {
        "Bommanahalli": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Singasandra": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Kundalahalli": {
      lat: 12.968,
      lng: 77.716,
      connections: {
        "Nallurhalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Seetharampalya": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Lalbagh": {
      lat: 12.94746,
      lng: 77.57866,
      connections: {
        "National College": { distance: 1.2, time: 2, fare: 10, line: "Green Line" },
        "South End Circle": { distance: 0.8, time: 1, fare: 10, line: "Green Line" }
      }
    },
    "Madavara": {
      lat: 13.0574,
      lng: 77.4729,
      connections: {
        "Chikkabidarakallu": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Magadi Road": {
      lat: 12.9723,
      lng: 77.55125,
      connections: {
        "City Railway Station": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Hosahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Mahakavi Kuvempu Road": {
      lat: 13.00133,
      lng: 77.56433,
      connections: {
        "Rajajinagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Srirampura": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Mahalakshmi": {
      lat: 13.01227,
      lng: 77.55727,
      connections: {
        "Rajajinagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Sandal Soap Factory": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Mahatma Gandhi Road": {
      lat: 12.9754,
      lng: 77.6067,
      connections: {
        "Cubbon Park": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" },
        "Trinity": { distance: 0.9, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Manjunath Nagar": {
      lat: 13.04467,
      lng: 77.48643,
      connections: {
        "Chikkabidarakallu": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Nagasandra": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Mantri Square Sampige Road": {
      lat: 12.9904,
      lng: 77.5714,
      connections: {
        "Nadaprabhu Kempegowda Station Majestic": { distance: 1.6, time: 3, fare: 12, line: "Green Line" },
        "Srirampura": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Mysuru Road": {
      lat: 12.9535,
      lng: 77.5305,
      connections: {
        "Deepanjali Nagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Pantharapalya (Nayandahalli)": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Nadaprabhu Kempegowda Station Majestic": {
      lat: 12.9757,
      lng: 77.5729,
      connections: {
        "Chickpet": { distance: 1.4, time: 3, fare: 10, line: "Green Line" },
        "City Railway Station": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Mantri Square Sampige Road": { distance: 1.6, time: 3, fare: 12, line: "Green Line" },
        "Sir M Visvesvaraya Station": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Nagasandra": {
      lat: 13.0383,
      lng: 77.4932,
      connections: {
        "Dasarahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Manjunath Nagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Nallurhalli": {
      lat: 12.97268,
      lng: 77.72333,
      connections: {
        "Kundalahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Sri Sathya Sai Hospital": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "National College": {
      lat: 12.95452,
      lng: 77.57722,
      connections: {
        "Krishna Rajendra Market": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Lalbagh": { distance: 1.2, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Pantharapalya (Nayandahalli)": {
      lat: 12.948,
      lng: 77.52171,
      connections: {
        "Mysuru Road": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Rajarajeshwari Nagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Pattanagere": {
      lat: 12.9315,
      lng: 77.49536,
      connections: {
        "Jnanabharathi": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Kengeri Bus Terminal": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Pattandur Agrahara": {
      lat: 12.98205,
      lng: 77.738,
      connections: {
        "Kadugodi Tree Park": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Sri Sathya Sai Hospital": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Peenya": {
      lat: 13.02823,
      lng: 77.5312,
      connections: {
        "Goraguntepalya": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Peenya Industry": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Peenya Industry": {
      lat: 13.03075,
      lng: 77.5217,
      connections: {
        "Jalahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Peenya": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Ragigudda": {
      lat: 12.9205,
      lng: 77.59075,
      connections: {
        "Jayadeva Hospital": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Rashtreeya Vidyalaya Road": { distance: 1.1, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Rajajinagar": {
      lat: 13.0068,
      lng: 77.5608,
      connections: {
        "Mahakavi Kuvempu Road": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Mahalakshmi": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Rajarajeshwari Nagar": {
      lat: 12.9425,
      lng: 77.51293,
      connections: {
        "Jnanabharathi": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Pantharapalya (Nayandahalli)": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Rashtreeya Vidyalaya Road": {
      lat: 12.9213,
      lng: 77.581,
      connections: {
        "Banashankari": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Jayanagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Ragigudda": { distance: 1.1, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Sandal Soap Factory": {
      lat: 13.01773,
      lng: 77.55373,
      connections: {
        "Mahalakshmi": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Yeshwanthpur": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Seetharampalya": {
      lat: 12.97464,
      lng: 77.70778,
      connections: {
        "Hoodi": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Kundalahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Silk Institute": {
      lat: 12.8615,
      lng: 77.536,
      connections: {
        "Thalaghattapura": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Singasandra": {
      lat: 12.88,
      lng: 77.652,
      connections: {
        "Hosa Road": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" },
        "Kudlu Gate": { distance: 1.3, time: 2, fare: 10, line: "Yellow Line" }
      }
    },
    "Singayyanapalya": {
      lat: 12.99456,
      lng: 77.68312,
      connections: {
        "Garudacharpalya": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Krishnarajapura": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Sir M Visvesvaraya Station": {
      lat: 12.97563,
      lng: 77.58135,
      connections: {
        "Dr BR Ambedkar Station": { distance: 0.9, time: 2, fare: 10, line: "Purple Line" },
        "Nadaprabhu Kempegowda Station Majestic": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "South End Circle": {
      lat: 12.9404,
      lng: 77.5801,
      connections: {
        "Jayanagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Lalbagh": { distance: 0.8, time: 1, fare: 10, line: "Green Line" }
      }
    },
    "Sri Sathya Sai Hospital": {
      lat: 12.97737,
      lng: 77.73067,
      connections: {
        "Nallurhalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Pattandur Agrahara": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Srirampura": {
      lat: 12.99587,
      lng: 77.56787,
      connections: {
        "Mahakavi Kuvempu Road": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Mantri Square Sampige Road": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Swami Vivekananda Road": {
      lat: 12.9845,
      lng: 77.6439,
      connections: {
        "Baiyappanahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Indiranagar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Thalaghattapura": {
      lat: 12.8688,
      lng: 77.54344,
      connections: {
        "Silk Institute": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Vajarahalli": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Trinity": {
      lat: 12.97637,
      lng: 77.61737,
      connections: {
        "Halasuru": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Mahatma Gandhi Road": { distance: 0.9, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Vajarahalli": {
      lat: 12.8761,
      lng: 77.55088,
      connections: {
        "Doddakallasandra": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Thalaghattapura": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Vijayanagar": {
      lat: 12.96565,
      lng: 77.53583,
      connections: {
        "Attiguppe": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Hosahalli": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Whitefield (Kadugodi)": {
      lat: 12.9961,
      lng: 77.76,
      connections: {
        "Hopefarm Channasandra": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Yelachenahalli": {
      lat: 12.898,
      lng: 77.5732,
      connections: {
        "JP Nagar": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Konanakunte Cross": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Yeshwanthpur": {
      lat: 13.0232,
      lng: 77.5502,
      connections: {
        "Goraguntepalya": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Sandal Soap Factory": { distance: 1.1, time: 2, fare: 10, line: "Green Line" }
      }
    }
  },
  "Kolkata": {
    "Baranagar": {
      lat: 22.6433,
      lng: 88.3653,
      connections: {
        "Dakshineswar": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Noapara": { distance: 1.5, time: 3, fare: 10, line: "Blue Line" }
      }
    },
    "Behala Bazar": {
      lat: 22.4741,
      lng: 88.3175,
      connections: {
        "Behala Chowrasta": { distance: 1.0, time: 2, fare: 10, line: "Purple Line" },
        "Taratala": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Behala Chowrasta": {
      lat: 22.4645,
      lng: 88.3125,
      connections: {
        "Behala Bazar": { distance: 1.0, time: 2, fare: 10, line: "Purple Line" },
        "Sakherbazar": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Belgachia": {
      lat: 22.6058,
      lng: 88.3864,
      connections: {
        "Dum Dum": { distance: 1.5, time: 2, fare: 10, line: "Blue Line" },
        "Shyambazar": { distance: 1.5, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Bengal Chemical": {
      lat: 22.5746,
      lng: 88.411,
      connections: {
        "City Centre": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Salt Lake Stadium": { distance: 0.8, time: 1, fare: 5, line: "Green Line" }
      }
    },
    "Central": {
      lat: 22.57247,
      lng: 88.35878,
      connections: {
        "Chandni Chowk": { distance: 0.6, time: 1, fare: 5, line: "Blue Line" },
        "Mahatma Gandhi Road": { distance: 1.3, time: 3, fare: 10, line: "Blue Line" }
      }
    },
    "Central Park": {
      lat: 22.5855,
      lng: 88.414,
      connections: {
        "City Centre": { distance: 0.6, time: 1, fare: 5, line: "Green Line" },
        "Karunamoyee": { distance: 0.8, time: 1, fare: 5, line: "Green Line" }
      }
    },
    "Chandni Chowk": {
      lat: 22.5645,
      lng: 88.3582,
      connections: {
        "Central": { distance: 0.6, time: 1, fare: 5, line: "Blue Line" },
        "Esplanade": { distance: 0.7, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "City Centre": {
      lat: 22.587069,
      lng: 88.407823,
      connections: {
        "Bengal Chemical": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Central Park": { distance: 0.6, time: 1, fare: 5, line: "Green Line" }
      }
    },
    "Dakshineswar": {
      lat: 22.65397,
      lng: 88.36372,
      connections: {
        "Baranagar": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Dum Dum": {
      lat: 22.621027,
      lng: 88.392818,
      connections: {
        "Belgachia": { distance: 1.5, time: 2, fare: 10, line: "Blue Line" },
        "Noapara": { distance: 2.1, time: 3, fare: 10, line: "Blue Line" }
      }
    },
    "Esplanade": {
      lat: 22.5649,
      lng: 88.3517,
      connections: {
        "Chandni Chowk": { distance: 0.7, time: 2, fare: 5, line: "Blue Line" },
        "Mahakaran": { distance: 1.4, time: 2, fare: 10, line: "Green Line" },
        "Park Street": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" },
        "Sealdah": { distance: 2.1, time: 3, fare: 10, line: "Green Line" }
      }
    },
    "Girish Park": {
      lat: 22.5855,
      lng: 88.3619,
      connections: {
        "Mahatma Gandhi Road": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" },
        "Shobhabazar Sutanuti": { distance: 1.1, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Gitanjali": {
      lat: 22.469426,
      lng: 88.369985,
      connections: {
        "Kavi Nazrul": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Masterda Surya Sen": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Hemanta Mukhopadhyay": {
      lat: 22.5135,
      lng: 88.4015,
      connections: {
        "Kavi Sukanta": { distance: 1.2, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Howrah": {
      lat: 22.584454,
      lng: 88.340578,
      connections: {
        "Howrah Maidan": { distance: 1.3, time: 2, fare: 10, line: "Green Line" },
        "Mahakaran": { distance: 1.8, time: 3, fare: 10, line: "Green Line" }
      }
    },
    "Howrah Maidan": {
      lat: 22.58131,
      lng: 88.326,
      connections: {
        "Howrah": { distance: 1.3, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Jatin Das Park": {
      lat: 22.52426,
      lng: 88.34648,
      connections: {
        "Kalighat": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" },
        "Netaji Bhavan": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Joka": {
      lat: 22.4344,
      lng: 88.2905,
      connections: {
        "Thakurpukur": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Jyotirindra Nandi": {
      lat: 22.4895,
      lng: 88.3995,
      connections: {
        "Kavi Sukanta": { distance: 1.3, time: 2, fare: 10, line: "Orange Line" },
        "Satyajit Ray": { distance: 1.2, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Kalighat": {
      lat: 22.5181,
      lng: 88.3458,
      connections: {
        "Jatin Das Park": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" },
        "Rabindra Sarobar": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Karunamoyee": {
      lat: 22.58638,
      lng: 88.42153,
      connections: {
        "Central Park": { distance: 0.8, time: 1, fare: 5, line: "Green Line" },
        "Salt Lake Sector V": { distance: 0.9, time: 2, fare: 5, line: "Green Line" }
      }
    },
    "Kavi Nazrul": {
      lat: 22.464172,
      lng: 88.380555,
      connections: {
        "Gitanjali": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Shahid Khudiram": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Kavi Subhash": {
      lat: 22.47194,
      lng: 88.39806,
      connections: {
        "Satyajit Ray": { distance: 1.1, time: 2, fare: 10, line: "Orange Line" },
        "Shahid Khudiram": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Kavi Sukanta": {
      lat: 22.5025,
      lng: 88.4005,
      connections: {
        "Hemanta Mukhopadhyay": { distance: 1.2, time: 2, fare: 10, line: "Orange Line" },
        "Jyotirindra Nandi": { distance: 1.3, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Mahakaran": {
      lat: 22.57207,
      lng: 88.35052,
      connections: {
        "Esplanade": { distance: 1.4, time: 2, fare: 10, line: "Green Line" },
        "Howrah": { distance: 1.8, time: 3, fare: 10, line: "Green Line" }
      }
    },
    "Mahanayak Uttam Kumar": {
      lat: 22.49445,
      lng: 88.34515,
      connections: {
        "Netaji": { distance: 1.5, time: 3, fare: 10, line: "Blue Line" },
        "Rabindra Sarobar": { distance: 1.4, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Mahatma Gandhi Road": {
      lat: 22.5794,
      lng: 88.3611,
      connections: {
        "Central": { distance: 1.3, time: 3, fare: 10, line: "Blue Line" },
        "Girish Park": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Maidan": {
      lat: 22.5447,
      lng: 88.3475,
      connections: {
        "Park Street": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Rabindra Sadan": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Majerhat": {
      lat: 22.4985,
      lng: 88.3245,
      connections: {
        "Taratala": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Masterda Surya Sen": {
      lat: 22.4705,
      lng: 88.3595,
      connections: {
        "Gitanjali": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Netaji": { distance: 1.4, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Netaji": {
      lat: 22.480976,
      lng: 88.346,
      connections: {
        "Mahanayak Uttam Kumar": { distance: 1.5, time: 3, fare: 10, line: "Blue Line" },
        "Masterda Surya Sen": { distance: 1.4, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Netaji Bhavan": {
      lat: 22.53297,
      lng: 88.34571,
      connections: {
        "Jatin Das Park": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" },
        "Rabindra Sadan": { distance: 0.9, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Noapara": {
      lat: 22.639673,
      lng: 88.393978,
      connections: {
        "Baranagar": { distance: 1.5, time: 3, fare: 10, line: "Blue Line" },
        "Dum Dum": { distance: 2.1, time: 3, fare: 10, line: "Blue Line" }
      }
    },
    "Park Street": {
      lat: 22.55445,
      lng: 88.34985,
      connections: {
        "Esplanade": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" },
        "Maidan": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Phoolbagan": {
      lat: 22.57212,
      lng: 88.39024,
      connections: {
        "Salt Lake Stadium": { distance: 1.4, time: 2, fare: 10, line: "Green Line" },
        "Sealdah": { distance: 2.1, time: 3, fare: 10, line: "Green Line" }
      }
    },
    "Rabindra Sadan": {
      lat: 22.5348,
      lng: 88.3458,
      connections: {
        "Maidan": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Netaji Bhavan": { distance: 0.9, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Rabindra Sarobar": {
      lat: 22.5083,
      lng: 88.3456,
      connections: {
        "Kalighat": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "Mahanayak Uttam Kumar": { distance: 1.4, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Sakherbazar": {
      lat: 22.4542,
      lng: 88.3065,
      connections: {
        "Behala Chowrasta": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Thakurpukur": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Salt Lake Sector V": {
      lat: 22.58131,
      lng: 88.42982,
      connections: {
        "Karunamoyee": { distance: 0.9, time: 2, fare: 5, line: "Green Line" }
      }
    },
    "Salt Lake Stadium": {
      lat: 22.57311,
      lng: 88.40308,
      connections: {
        "Bengal Chemical": { distance: 0.8, time: 1, fare: 5, line: "Green Line" },
        "Phoolbagan": { distance: 1.4, time: 2, fare: 10, line: "Green Line" }
      }
    },
    "Satyajit Ray": {
      lat: 22.4795,
      lng: 88.3985,
      connections: {
        "Jyotirindra Nandi": { distance: 1.2, time: 2, fare: 10, line: "Orange Line" },
        "Kavi Subhash": { distance: 1.1, time: 2, fare: 10, line: "Orange Line" }
      }
    },
    "Sealdah": {
      lat: 22.56641,
      lng: 88.37002,
      connections: {
        "Esplanade": { distance: 2.1, time: 3, fare: 10, line: "Green Line" },
        "Phoolbagan": { distance: 2.1, time: 3, fare: 10, line: "Green Line" }
      }
    },
    "Shahid Khudiram": {
      lat: 22.46621,
      lng: 88.39153,
      connections: {
        "Kavi Nazrul": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Kavi Subhash": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" }
      }
    },
    "Shobhabazar Sutanuti": {
      lat: 22.5959,
      lng: 88.3664,
      connections: {
        "Girish Park": { distance: 1.1, time: 2, fare: 5, line: "Blue Line" },
        "Shyambazar": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Shyambazar": {
      lat: 22.6013,
      lng: 88.3712,
      connections: {
        "Belgachia": { distance: 1.5, time: 2, fare: 10, line: "Blue Line" },
        "Shobhabazar Sutanuti": { distance: 0.8, time: 2, fare: 5, line: "Blue Line" }
      }
    },
    "Taratala": {
      lat: 22.4842,
      lng: 88.3225,
      connections: {
        "Behala Bazar": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" },
        "Majerhat": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" }
      }
    },
    "Thakurpukur": {
      lat: 22.4435,
      lng: 88.2995,
      connections: {
        "Joka": { distance: 1.2, time: 2, fare: 10, line: "Purple Line" },
        "Sakherbazar": { distance: 1.1, time: 2, fare: 10, line: "Purple Line" }
      }
    }
  },
    "Chennai": {
    "AG-DMS": {
      lat: 13.045,
      lng: 80.245,
      connections: {
        "Teynampet": { distance: 0.7, time: 2, fare: 10, line: "Blue Line" },
        "Thousand Lights": { distance: 2.1, time: 3, fare: 15, line: "Blue Line" },
      }
    },
    "Anna Nagar East": {
      lat: 13.0785,
      lng: 80.2135,
      connections: {
        "Anna Nagar Tower": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Shenoy Nagar": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Anna Nagar Tower": {
      lat: 13.0782,
      lng: 80.2045,
      connections: {
        "Anna Nagar East": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Thirumangalam": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Arignar Anna Alandur": {
      lat: 13.0042,
      lng: 80.2015,
      connections: {
        "Ekkattuthangal": { distance: 2.2, time: 3, fare: 15, line: "Green Line" },
        "Guindy": { distance: 2.2, time: 3, fare: 15, line: "Blue Line" },
        "Nanganallur Road": { distance: 1.7, time: 2, fare: 10, line: "Blue Line" },
        "St Thomas Mount": { distance: 0.9, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Arumbakkam": {
      lat: 13.0615,
      lng: 80.2115,
      connections: {
        "Puratchi Thalaivi Dr J Jayalalithaa CMBT": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Vadapalani": { distance: 1.2, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Ashok Nagar": {
      lat: 13.0355,
      lng: 80.2115,
      connections: {
        "Ekkattuthangal": { distance: 1.6, time: 2, fare: 10, line: "Green Line" },
        "Vadapalani": { distance: 1.7, time: 3, fare: 10, line: "Green Line" },
      }
    },
    "Chennai International Airport": {
      lat: 12.9805,
      lng: 80.165,
      connections: {
        "Meenambakkam": { distance: 1.8, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Egmore": {
      lat: 13.0785,
      lng: 80.2615,
      connections: {
        "Nehru Park": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Puratchi Thalaivar Dr MG Ramachandran Central": { distance: 1.3, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Ekkattuthangal": {
      lat: 13.0215,
      lng: 80.2115,
      connections: {
        "Arignar Anna Alandur": { distance: 2.2, time: 3, fare: 15, line: "Green Line" },
        "Ashok Nagar": { distance: 1.6, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Government Estate": {
      lat: 13.0715,
      lng: 80.2715,
      connections: {
        "LIC": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "Puratchi Thalaivar Dr MG Ramachandran Central": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Guindy": {
      lat: 13.009,
      lng: 80.2205,
      connections: {
        "Arignar Anna Alandur": { distance: 2.2, time: 3, fare: 15, line: "Blue Line" },
        "Little Mount": { distance: 2.4, time: 3, fare: 15, line: "Blue Line" },
      }
    },
    "High Court": {
      lat: 13.088,
      lng: 80.2885,
      connections: {
        "Mannadi": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Puratchi Thalaivar Dr MG Ramachandran Central": { distance: 1.9, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Kaladipet": {
      lat: 13.1505,
      lng: 80.293,
      connections: {
        "Thiruvottriyur Theradi": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Tollgate": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Kilpauk Medical College": {
      lat: 13.0785,
      lng: 80.2415,
      connections: {
        "Nehru Park": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Pachaiyappa's College": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Koyambedu": {
      lat: 13.0732,
      lng: 80.1916,
      connections: {
        "Puratchi Thalaivi Dr J Jayalalithaa CMBT": { distance: 1.6, time: 2, fare: 10, line: "Green Line" },
        "Thirumangalam": { distance: 0.6, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "LIC": {
      lat: 13.0645,
      lng: 80.2645,
      connections: {
        "Government Estate": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "Thousand Lights": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Little Mount": {
      lat: 13.0165,
      lng: 80.2405,
      connections: {
        "Guindy": { distance: 2.4, time: 3, fare: 15, line: "Blue Line" },
        "Saidapet": { distance: 0.7, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Mannadi": {
      lat: 13.097,
      lng: 80.288,
      connections: {
        "High Court": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Washermanpet": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Meenambakkam": {
      lat: 12.983,
      lng: 80.181,
      connections: {
        "Chennai International Airport": { distance: 1.8, time: 2, fare: 10, line: "Blue Line" },
        "Nanganallur Road": { distance: 2.0, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Nandanam": {
      lat: 13.0305,
      lng: 80.243,
      connections: {
        "Saidapet": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
        "Teynampet": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Nanganallur Road": {
      lat: 12.989,
      lng: 80.198,
      connections: {
        "Arignar Anna Alandur": { distance: 1.7, time: 2, fare: 10, line: "Blue Line" },
        "Meenambakkam": { distance: 2.0, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Nehru Park": {
      lat: 13.0792,
      lng: 80.2515,
      connections: {
        "Egmore": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Kilpauk Medical College": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "New Washermanpet": {
      lat: 13.131,
      lng: 80.2902,
      connections: {
        "Tondiarpet": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
        "Tollgate": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Pachaiyappa's College": {
      lat: 13.0775,
      lng: 80.2315,
      connections: {
        "Kilpauk Medical College": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Shenoy Nagar": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Puratchi Thalaivar Dr MG Ramachandran Central": {
      lat: 13.0815,
      lng: 80.2728,
      connections: {
        "Egmore": { distance: 1.3, time: 2, fare: 10, line: "Green Line" },
        "Government Estate": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "High Court": { distance: 1.9, time: 3, fare: 10, line: "Blue Line" },
      }
    },
    "Puratchi Thalaivi Dr J Jayalalithaa CMBT": {
      lat: 13.0675,
      lng: 80.205,
      connections: {
        "Arumbakkam": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Koyambedu": { distance: 1.6, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Saidapet": {
      lat: 13.0225,
      lng: 80.2425,
      connections: {
        "Little Mount": { distance: 0.7, time: 2, fare: 10, line: "Blue Line" },
        "Nandanam": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Shenoy Nagar": {
      lat: 13.078,
      lng: 80.2225,
      connections: {
        "Anna Nagar East": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
        "Pachaiyappa's College": { distance: 1.0, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Sir Theagaraya College": {
      lat: 13.114,
      lng: 80.289,
      connections: {
        "Tondiarpet": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
        "Washermanpet": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "St Thomas Mount": {
      lat: 12.996,
      lng: 80.2008,
      connections: {
        "Arignar Anna Alandur": { distance: 0.9, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Teynampet": {
      lat: 13.039,
      lng: 80.2435,
      connections: {
        "AG-DMS": { distance: 0.7, time: 2, fare: 10, line: "Blue Line" },
        "Nandanam": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Thirumangalam": {
      lat: 13.0775,
      lng: 80.1945,
      connections: {
        "Anna Nagar Tower": { distance: 1.1, time: 2, fare: 10, line: "Green Line" },
        "Koyambedu": { distance: 0.6, time: 2, fare: 10, line: "Green Line" },
      }
    },
    "Thiruvottriyur": {
      lat: 13.1705,
      lng: 80.3015,
      connections: {
        "Thiruvottriyur Theradi": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Wimco Nagar": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Thiruvottriyur Theradi": {
      lat: 13.161,
      lng: 80.297,
      connections: {
        "Kaladipet": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
        "Thiruvottriyur": { distance: 1.2, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Thousand Lights": {
      lat: 13.0585,
      lng: 80.2585,
      connections: {
        "AG-DMS": { distance: 2.1, time: 3, fare: 15, line: "Blue Line" },
        "LIC": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Tollgate": {
      lat: 13.141,
      lng: 80.291,
      connections: {
        "Kaladipet": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "New Washermanpet": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Tondiarpet": {
      lat: 13.123,
      lng: 80.2895,
      connections: {
        "New Washermanpet": { distance: 0.9, time: 2, fare: 10, line: "Blue Line" },
        "Sir Theagaraya College": { distance: 1.0, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Vadapalani": {
      lat: 13.0505,
      lng: 80.2115,
      connections: {
        "Arumbakkam": { distance: 1.2, time: 2, fare: 10, line: "Green Line" },
        "Ashok Nagar": { distance: 1.7, time: 3, fare: 10, line: "Green Line" },
      }
    },
    "Washermanpet": {
      lat: 13.104,
      lng: 80.2882,
      connections: {
        "Mannadi": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" },
        "Sir Theagaraya College": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Wimco Nagar": {
      lat: 13.1791,
      lng: 80.3072,
      connections: {
        "Thiruvottriyur": { distance: 1.1, time: 2, fare: 10, line: "Blue Line" },
        "Wimco Nagar Depot": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Wimco Nagar Depot": {
      lat: 13.18,
      lng: 80.305,
      connections: {
        "Wimco Nagar": { distance: 0.8, time: 2, fare: 10, line: "Blue Line" },
      }
    },
  },
  "Ahmedabad": {
    "AEC": {
      lat: 23.0862,
      lng: 72.5842,
      connections: {
        "Sabarmati": { distance: 0.98, time: 2, fare: 10, line: "Red Line" },
        "Sabarmati Railway Station": { distance: 0.94, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "APMC": {
      lat: 22.9969,
      lng: 72.5375,
      connections: {
        "Jivraj Park": { distance: 0.84, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Amraiwadi": {
      lat: 23.0112,
      lng: 72.619,
      connections: {
        "Apparel Park": { distance: 1.01, time: 2, fare: 10, line: "Blue Line" },
        "Rabari Colony": { distance: 1.03, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Apparel Park": {
      lat: 23.0185,
      lng: 72.6135,
      connections: {
        "Amraiwadi": { distance: 1.01, time: 2, fare: 10, line: "Blue Line" },
        "Kankaria East": { distance: 0.76, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Commerce Six Road": {
      lat: 23.0416,
      lng: 72.554,
      connections: {
        "Gujarat University": { distance: 0.93, time: 2, fare: 10, line: "Blue Line" },
        "Stadium": { distance: 1.03, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Doordarshan Kendra": {
      lat: 23.0465,
      lng: 72.5286,
      connections: {
        "Gurukul Road": { distance: 0.71, time: 1, fare: 10, line: "Blue Line" },
        "Thaltej": { distance: 1.14, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Gandhigram": {
      lat: 23.0335,
      lng: 72.5642,
      connections: {
        "Old High Court": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Paldi": { distance: 1.02, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Gheekanta": {
      lat: 23.0345,
      lng: 72.5925,
      connections: {
        "Kalupur Railway Station": { distance: 1.17, time: 2, fare: 10, line: "Blue Line" },
        "Shahpur": { distance: 1.08, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Gujarat University": {
      lat: 23.0435,
      lng: 72.5458,
      connections: {
        "Commerce Six Road": { distance: 0.93, time: 2, fare: 10, line: "Blue Line" },
        "Gurukul Road": { distance: 1.23, time: 2, fare: 15, line: "Blue Line" },
      }
    },
    "Gurukul Road": {
      lat: 23.0458,
      lng: 72.535,
      connections: {
        "Doordarshan Kendra": { distance: 0.71, time: 1, fare: 10, line: "Blue Line" },
        "Gujarat University": { distance: 1.23, time: 2, fare: 15, line: "Blue Line" },
      }
    },
    "Jivraj Park": {
      lat: 23.0035,
      lng: 72.5412,
      connections: {
        "APMC": { distance: 0.84, time: 2, fare: 10, line: "Red Line" },
        "Rajiv Nagar": { distance: 0.87, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Kalupur Railway Station": {
      lat: 23.0312,
      lng: 72.6025,
      connections: {
        "Gheekanta": { distance: 1.17, time: 2, fare: 10, line: "Blue Line" },
        "Kankaria East": { distance: 1.11, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Kankaria East": {
      lat: 23.0232,
      lng: 72.6085,
      connections: {
        "Apparel Park": { distance: 0.76, time: 1, fare: 10, line: "Blue Line" },
        "Kalupur Railway Station": { distance: 1.11, time: 2, fare: 10, line: "Blue Line" },
      }
    },
    "Motera Stadium": {
      lat: 23.1032,
      lng: 72.591,
      connections: {
        "Sabarmati": { distance: 1.05, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Nirant Cross Road": {
      lat: 22.9965,
      lng: 72.645,
      connections: {
        "Vastral": { distance: 1.24, time: 2, fare: 15, line: "Blue Line" },
        "Vastral Gam": { distance: 1.3, time: 2, fare: 15, line: "Blue Line" },
      }
    },
    "Old High Court": {
      lat: 23.039,
      lng: 72.5702,
      connections: {
        "Gandhigram": { distance: 0.9, time: 2, fare: 10, line: "Red Line" },
        "Shahpur": { distance: 1.53, time: 3, fare: 15, line: "Blue Line" },
        "Stadium": { distance: 0.79, time: 1, fare: 10, line: "Blue Line" },
        "Usmanpura": { distance: 0.79, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Paldi": {
      lat: 23.0265,
      lng: 72.5582,
      connections: {
        "Gandhigram": { distance: 1.02, time: 2, fare: 10, line: "Red Line" },
        "Shreyas": { distance: 1.12, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Rabari Colony": {
      lat: 23.0035,
      lng: 72.6242,
      connections: {
        "Amraiwadi": { distance: 1.03, time: 2, fare: 10, line: "Blue Line" },
        "Vastral": { distance: 1.22, time: 2, fare: 15, line: "Blue Line" },
      }
    },
    "Rajiv Nagar": {
      lat: 23.0098,
      lng: 72.5458,
      connections: {
        "Jivraj Park": { distance: 0.87, time: 2, fare: 10, line: "Red Line" },
        "Shreyas": { distance: 1.19, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Ranip": {
      lat: 23.0715,
      lng: 72.5798,
      connections: {
        "Sabarmati Railway Station": { distance: 0.77, time: 1, fare: 10, line: "Red Line" },
        "Vadaj": { distance: 0.97, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Sabarmati": {
      lat: 23.0945,
      lng: 72.5872,
      connections: {
        "AEC": { distance: 0.98, time: 2, fare: 10, line: "Red Line" },
        "Motera Stadium": { distance: 1.05, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Sabarmati Railway Station": {
      lat: 23.0782,
      lng: 72.5815,
      connections: {
        "AEC": { distance: 0.94, time: 2, fare: 10, line: "Red Line" },
        "Ranip": { distance: 0.77, time: 1, fare: 10, line: "Red Line" },
      }
    },
    "Shahpur": {
      lat: 23.0392,
      lng: 72.584,
      connections: {
        "Gheekanta": { distance: 1.08, time: 2, fare: 10, line: "Blue Line" },
        "Old High Court": { distance: 1.53, time: 3, fare: 15, line: "Blue Line" },
      }
    },
    "Shreyas": {
      lat: 23.0185,
      lng: 72.552,
      connections: {
        "Paldi": { distance: 1.12, time: 2, fare: 10, line: "Red Line" },
        "Rajiv Nagar": { distance: 1.19, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Stadium": {
      lat: 23.0402,
      lng: 72.5632,
      connections: {
        "Commerce Six Road": { distance: 1.03, time: 2, fare: 10, line: "Blue Line" },
        "Old High Court": { distance: 0.79, time: 1, fare: 10, line: "Blue Line" },
      }
    },
    "Thaltej": {
      lat: 23.0487,
      lng: 72.5186,
      connections: {
        "Doordarshan Kendra": { distance: 1.14, time: 2, fare: 10, line: "Blue Line" },
        "Thaltej Gam": { distance: 1.52, time: 3, fare: 15, line: "Blue Line" },
      }
    },
    "Thaltej Gam": {
      lat: 23.04998,
      lng: 72.505,
      connections: {
        "Thaltej": { distance: 1.52, time: 3, fare: 15, line: "Blue Line" },
      }
    },
    "Usmanpura": {
      lat: 23.0458,
      lng: 72.5722,
      connections: {
        "Old High Court": { distance: 0.79, time: 1, fare: 10, line: "Red Line" },
        "Vijay Nagar": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Vadaj": {
      lat: 23.0632,
      lng: 72.5772,
      connections: {
        "Ranip": { distance: 0.97, time: 2, fare: 10, line: "Red Line" },
        "Vijay Nagar": { distance: 1.01, time: 2, fare: 10, line: "Red Line" },
      }
    },
    "Vastral": {
      lat: 22.9985,
      lng: 72.634,
      connections: {
        "Nirant Cross Road": { distance: 1.24, time: 2, fare: 15, line: "Blue Line" },
        "Rabari Colony": { distance: 1.22, time: 2, fare: 15, line: "Blue Line" },
      }
    },
    "Vastral Gam": {
      lat: 22.9945,
      lng: 72.6565,
      connections: {
        "Nirant Cross Road": { distance: 1.3, time: 2, fare: 15, line: "Blue Line" },
      }
    },
    "Vijay Nagar": {
      lat: 23.0545,
      lng: 72.5745,
      connections: {
        "Usmanpura": { distance: 1.0, time: 2, fare: 10, line: "Red Line" },
        "Vadaj": { distance: 1.01, time: 2, fare: 10, line: "Red Line" },
      }
    },
  }
};
