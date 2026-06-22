const details = {
  "profile": {
    "name": "Earl Jan Do",
    "location": "Silago, Southern Leyte, Philippines",
    "yearsOfExperience": 4,
    "title": "Full Stack Developer / Systems Developer",
    "about": "A passionate web developer from the Philippines specializing in both backend and frontend development, focusing on creating efficient, maintainable, and user-friendly applications. Approaches development with a strong emphasis on scalability, performance, and clean architecture.",
    "philosophy": [
      "Performance-focused development",
      "Scalable system design",
      "Clean and maintainable architecture",
      "Continuous optimization mindset",
      "If it can be thought, it can be learned"
    ],
    "contact": {
      "gmail": "do.earljan@gmail.com",
      "mobileNumber": "09633316391"
    },
    "Age": {
      "birthday": "I was born on May 12, 2000 and I am now 26 years old"
    },
    "currentEmployer" : {
      "company": "Avega Bros. Integrated Shipping Corp or ABISC"
    },
    "whereDoILive": {
      "address": "I am currently residing in Tayud Consolacion Cebu since it is much closer in my workplace in AVEGA, I do usually take a break or go back to my province to take vacation and I will leave with my parents and grandparents since we are living together."
    },
    "socials": {
      "github": "https://github.com/Erzan12",
      "linkedin": "https://www.linkedin.com/in/earl-jan-do-303253194",
      "twitter": "",
      "facebook": "https://www.facebook.com/erjan.do.7"
    },
    "petName": {
      "cat": "My cat name is Cali I am more of a cat person but i love dogs too! but i really love cats more because of there attitude and shinanigans which amazes me, i love feeding strays too! because I can relate myself to way thats why my heart is close to these innocent creatures. Its the only thing I can do for them many eyes can see but no one will dare to act."
    },
    "workSchedule": {
      "day": "Monday to Saturday but saturday is halfday but it is count as whole day, Monday to Friday working hours is from 8:30 am to 5:00 pm", 
      "availability": "I am available when I will get home I think from 5:30 pm to 9 pm since I sleep early and wake early morning the next day. And saturday afternoon and sunday I am available",
      "note": "We do not have work though on holidays"
    },
    "familyMembers": [
      {
        "mother": "Era Humawid Do ",
        "father": "Edgar Dasig Do Jr.",
        "parentOccupation": "Both are working in the Government especifically DEPED, my Father is in the Division of Maasin city as Admin Aide my mother is a Senior Bookkeeper in Silago Central School"
      },
      {
        "siblings": ["Jiera Mae Humawid Do", "Jiera Ann Humawid Do"],
        "siblingDescription": "Both are still studying in Southern Leyte State University Main Campus in Sogod, Southern Leyte. Both are 3rd year students taking Bachelor of Science in Hotel Management, they are twins by the way",
      },
      {
        "grandMother": "Cristita Dasig Do",
        "grandFather": "Edgar Wales Do Sr."
      },
      {
        "address": "We lived in Barangay Sap-Ang Silago Southern Leyte"
      }
    ]
  },
  "education": {
    "degree": "Bachelor of Science in Information Technology",
    "institution": "Southern Leyte State University (SLSU)",
    "graduationDate": "May 26, 2023"
  },
  "certifications": [
    {
      "title": "National Certificate II – Computer System Servicing",
      "details": "Certified in computer hardware servicing, network and server administration, Active Directory management, domain configuration, troubleshooting, and workplace safety practices."
    }
  ],
}

export async function getProfile() {
  return details;
}