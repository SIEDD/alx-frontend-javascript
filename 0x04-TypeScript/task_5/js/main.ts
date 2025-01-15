interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
  }
  
  interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits"
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits"
    };
  }
  
  const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
  const major2: MajorCredits = { credits: 20, brand: "MajorCredits" };
  
  const minor1: MinorCredits = { credits: 10, brand: "MinorCredits" };
  const minor2: MinorCredits = { credits: 15, brand: "MinorCredits" };
  
  console.log("Total Major Credits:", sumMajorCredits(major1, major2));
  console.log("Total Minor Credits:", sumMinorCredits(minor1, minor2));
  
