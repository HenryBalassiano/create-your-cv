export interface Experience {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;   
     id:string

  }
  export interface PersonalInfo{
    name:string, 
    email:string,
    phone: string,
    address:string 
  }
  export  interface Education {
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    id:string
  }
 export interface ResumeData {
    experience: Experience[];
    education: Education[];
    personalInfo:PersonalInfo[]
  }
