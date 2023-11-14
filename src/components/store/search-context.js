import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  jobTitle: "",
  location: "",
  results: [
    {
      title: "React Developer",
      company_name: "TEKsystems",
      location: "  Charlotte, NC   ",
      via: "via TEKsystems Careers",
      description:
        "Description:\n" +
        "\n" +
        "Required Skills: ( Team Lead position...\n" +
        "• 7+ years of Information technology experience in Application and/or Datawarehouse development\n" +
        "• 5+ years of JavaScript, Node JS, HTML5, CSS/CSS3, Material UI, React. Web based user services leveraging common frameworks such as Django, Node.js, GraphQL or similar\n" +
        "• 2+ years of experience working with Hadoop big data technologies, such as Hive, Pig, HBase or related technologies\n" +
        "• 3+ years of experience with SQL database systems and database technologies such as Oracle, MSSQL, Cassandra\n" +
        "• 2+ years of CI/CD toolset (Git, Bitbucket/GitHub, Jenkins, etc.) experience\n" +
        "• Testing frameworks like Jest, React Testing Library, Sonar\n" +
        "• Self-motivated with organizational skills and ability to manage multiple priorities without sacrificing quality or timelines\n" +
        "• Facilitate communication, influence and negotiate both vertically and horizontally to obtain agreement between partners\n" +
        "• Experience working in an Agile environment, processes with knowledge of software development lifecycle\n" +
        "• Excellent communication and collaboration skills analytical and presentation skills\n" +
        "Desired Skills:\n" +
        "• Knowledge and understanding of diverse platforms and operating systems, including current and emerging technologies\n" +
        "• Ability to influence and build relationships with Line-Of-Business stakeholders, technology and architecture teams\n" +
        "• Experience working with financial institutions, specifically Credit or Market Risk\n" +
        "\n" +
        "Skills:\n" +
        "\n" +
        "React\n" +
        "\n" +
        "Top Skills Details:\n" +
        "\n" +
        "React\n" +
        "\n" +
        "Additional Skills & Qualifications:\n" +
        "\n" +
        "react\n" +
        "\n" +
        "Experience Level:\n" +
        "\n" +
        "Expert Level\n" +
        "\n" +
        "About TEKsystems:\n" +
        "\n" +
        "We're partners in transformation. We help clients activate ideas and solutions to take advantage of a new world of opportunity. We are a team of 80,000 strong, working with over 6,000 clients, including 80% of the Fortune 500, across North America, Europe and Asia. As an industry leader in Full-Stack Technology Services, Talent Services, and real-world application, we work with progressive leaders to drive change. That's the power of true partnership. TEKsystems is an Allegis Group company.\n" +
        "\n" +
        "The company is an equal opportunity employer and will consider all applications without regards to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law",
      job_highlights: [Array],
      related_links: [Array],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz446Brglusi2CkI79qvMDYHQoYzzjFImUSG3Jc7I&s",
      extensions: [Array],
      detected_extensions: [Object],
      job_id:
        "eyJqb2JfdGl0bGUiOiJSZWFjdCBEZXZlbG9wZXIiLCJodGlkb2NpZCI6Ik14bXhRREtPWHVBQ1lZeFZBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVXhQYm5CWldFdHNPVVJCYVVoTk5teEtTRlJUWldaeWVITnpkVW95TVV3NGVVb3lZWGQwWm0xYU5VMDVTbGx2TjJ4dVowWmtUR1Z4Y1RCdU1WQlNVMmxWYW5KVGFGaDVabE5xTmtORFUwRTFVRUZ2UjJvMFJVUTVVRmRGUnpGRlRFbDNiMGt0V2pSUU1UUnFSMnA2WDBseVVsRmZTMWRsTVVKZldUVnRUMFpzTWt4MlVYaHNNWEZRWkRNMWR6VklVWEV3YUZsT2N6WmxVMUpxUW1OV05uSXphRzVGTUhWU1dtdHBXa2xSY0c1WldITndlV0ZTYkRjeWVIWkVVbGRxVlRGVmVXb3pTa053UzJoU05GZENURFJZTmtzdFgyMXVOMU5TTlhWUFRrUXRkeElYVEVwMFZGcGhWSEJQWVMxMk5VNXZVSE5NY1ZoM1FYTWFJa0ZLZDJzdE9HVTBVSFIyYURCd1J6TkRaVGhwWTE5NFpGOTZhVUpuYmtsalJtYyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzE0IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFRFS3N5c3RlbXMgQ2FyZWVycyIsImxpbmsiOiJodHRwczovL2NhcmVlcnMudGVrc3lzdGVtcy5jb20vdXMvZW4vam9iL0pQLTAwNDE0NDY3NS9SZWFjdC1EZXZlbG9wZXI/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
    },
    {
      title: "Mobile Software Engineer (React Native)",
      company_name: "Ursus, Inc.",
      location: "  Fremont, CA   ",
      via: "via SaluteMyJob",
      description:
        "Job Title: React Native Developer\n" +
        "Location: Remote (Fremont, CA or Austin, TX area)\n" +
        "Duration: 6+ months contract to hire...\n" +
        "\n" +
        "Summary:\n" +
        "\n" +
        "The Digital Experience team is at the forefront of building a consistent, global customer experience across all digital touchpoints - web, native apps and in-car infotainment systems. This team is building the next generation products and supporting infrastructure which allows our customers, living in 60+ countries, to understand, interact and purchase our amazing vehicles and energy products.\n" +
        "\n" +
        "We are seeking a Front-End Software Engineer to join our US Retail Digital Products team and help build the in-house iPad application used by store Advisors. You will be challenged to deliver features quickly but thoughtfully, balancing speed to market with longevity and scalability, all in the name of extraordinary customer experiences.\n" +
        "\n" +
        "Responsibilities\n" +
        "• Work with a cross-functional team of Software Engineers, Product Managers, UX Designers, QA Engineers and DevOps Engineers to own your solution from development to production\n" +
        "• Design, code and maintain tablet and mobile user experiences end-to-end.\n" +
        "• Optimize code for performance, stability and maintainability.\n" +
        "• Work with a cross-functional team of application/UI software engineers, QA/Validation, product, and designers.\n" +
        "Requirements\n" +
        "• 5-10 years of relevant experience\n" +
        "• Bachelor's Degree in Computer Science, Software Engineering, or similar areas of study.\n" +
        "• Minimum 2 years' experience in Mobile (iOS) development.\n" +
        "• 2+ years building mobile experiences with evidence of exceptional ability.\n" +
        "• Proficient in React Native, Redux, TypeScript and GraphQL.\n" +
        "• Thorough understanding of core design principles and common design patterns of React\n" +
        "• Experience with UI Unit Testing.\n" +
        "• Experience creating, maintaining and shipping enterprise level applications.\n" +
        "• Experience using common design patterns with high standards for code quality, maintainability, and performance.\n" +
        "• Experience with payment libraries, node.js, express.js, next.js, UI/UX, HCI design and Android development is preferred.\n" +
        "\n" +
        "IND123",
      job_highlights: [Array],
      related_links: [Array],
      extensions: [Array],
      detected_extensions: [Object],
      job_id:
        "eyJqb2JfdGl0bGUiOiJNb2JpbGUgU29mdHdhcmUgRW5naW5lZXIgKFJlYWN0IE5hdGl2ZSkiLCJodGlkb2NpZCI6IkNVbDVhbzdtTHR5cFUwUDRBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVXhQYm5CWlZubHpRMGR3ZEV0Q1RFRTVTRkI2WmpkNk5YWXdVV3N6VVdjdE0ydElSa3BhUWtkbVJsWnJhVU0xVUdGTGVFbGFVWGh0VkdWSE5uZGhOeTFXVXpGd04xZDFkRE4zTTFOeWNsQktkbmhwTkcxclpsZDNhR3BqZUVwSlVWbFBUV1Z1WjBOblkwY3RWazgwTVdkMWEwSmxVRTlLUTFwUU9HSmxhMFJEU0U1WWRXdFVhazFPZVVKUWVUaFBhelF0TlZCWFJYQkZhbWx0Y1dWclpFeHdSVkJCVVV4MVQzQmhRV05sZDJNNVYybGFaRmRZWTJvd1FsTkNRbTUzTmpkTWVFTnNObXRtTm14b1ZVeEtlamwyWDJaVmRVNTJla1ZDWkhoV1F6SnJRUklYVEVwMFZGcGhWSEJQWVMxMk5VNXZVSE5NY1ZoM1FYTWFJa0ZLZDJzdE9HWXhPWFl5UVd4Q1kwZEpVVWd5WjNCUk5GODJTV1ZUZEdkdmVVRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzE2IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFNhbHV0ZU15Sm9iIiwibGluayI6Imh0dHBzOi8vc2FsdXRlbXlqb2IuY29tL2pvYnMvbW9iaWxlLXNvZnR3YXJlLWVuZ2luZWVyLXJlYWN0LW5hdGl2ZS1mcmVtb250LWNhbGlmb3JuaWEvMTE2MzQyNjM0NC0yLz91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
    },
  ],
  jobTitleHandler: () => {},
  locationHandler: () => {},
  submitSearchForm: () => {},
});

const SearchContextProvider = (props) => {
  const [jobTitleState, setJobTitleState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [resultsState, setResultsState] = useState([
    {
      title: "React Developer",
      company_name: "TEKsystems",
      location: "  Charlotte, NC   ",
      via: "via TEKsystems Careers",
      description:
        "Description:\n" +
        "\n" +
        "Required Skills: ( Team Lead position...\n" +
        "• 7+ years of Information technology experience in Application and/or Datawarehouse development\n" +
        "• 5+ years of JavaScript, Node JS, HTML5, CSS/CSS3, Material UI, React. Web based user services leveraging common frameworks such as Django, Node.js, GraphQL or similar\n" +
        "• 2+ years of experience working with Hadoop big data technologies, such as Hive, Pig, HBase or related technologies\n" +
        "• 3+ years of experience with SQL database systems and database technologies such as Oracle, MSSQL, Cassandra\n" +
        "• 2+ years of CI/CD toolset (Git, Bitbucket/GitHub, Jenkins, etc.) experience\n" +
        "• Testing frameworks like Jest, React Testing Library, Sonar\n" +
        "• Self-motivated with organizational skills and ability to manage multiple priorities without sacrificing quality or timelines\n" +
        "• Facilitate communication, influence and negotiate both vertically and horizontally to obtain agreement between partners\n" +
        "• Experience working in an Agile environment, processes with knowledge of software development lifecycle\n" +
        "• Excellent communication and collaboration skills analytical and presentation skills\n" +
        "Desired Skills:\n" +
        "• Knowledge and understanding of diverse platforms and operating systems, including current and emerging technologies\n" +
        "• Ability to influence and build relationships with Line-Of-Business stakeholders, technology and architecture teams\n" +
        "• Experience working with financial institutions, specifically Credit or Market Risk\n" +
        "\n" +
        "Skills:\n" +
        "\n" +
        "React\n" +
        "\n" +
        "Top Skills Details:\n" +
        "\n" +
        "React\n" +
        "\n" +
        "Additional Skills & Qualifications:\n" +
        "\n" +
        "react\n" +
        "\n" +
        "Experience Level:\n" +
        "\n" +
        "Expert Level\n" +
        "\n" +
        "About TEKsystems:\n" +
        "\n" +
        "We're partners in transformation. We help clients activate ideas and solutions to take advantage of a new world of opportunity. We are a team of 80,000 strong, working with over 6,000 clients, including 80% of the Fortune 500, across North America, Europe and Asia. As an industry leader in Full-Stack Technology Services, Talent Services, and real-world application, we work with progressive leaders to drive change. That's the power of true partnership. TEKsystems is an Allegis Group company.\n" +
        "\n" +
        "The company is an equal opportunity employer and will consider all applications without regards to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law",
      job_highlights: [Array],
      related_links: [Array],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz446Brglusi2CkI79qvMDYHQoYzzjFImUSG3Jc7I&s",
      extensions: [Array],
      detected_extensions: [Object],
      job_id:
        "eyJqb2JfdGl0bGUiOiJSZWFjdCBEZXZlbG9wZXIiLCJodGlkb2NpZCI6Ik14bXhRREtPWHVBQ1lZeFZBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVXhQYm5CWldFdHNPVVJCYVVoTk5teEtTRlJUWldaeWVITnpkVW95TVV3NGVVb3lZWGQwWm0xYU5VMDVTbGx2TjJ4dVowWmtUR1Z4Y1RCdU1WQlNVMmxWYW5KVGFGaDVabE5xTmtORFUwRTFVRUZ2UjJvMFJVUTVVRmRGUnpGRlRFbDNiMGt0V2pSUU1UUnFSMnA2WDBseVVsRmZTMWRsTVVKZldUVnRUMFpzTWt4MlVYaHNNWEZRWkRNMWR6VklVWEV3YUZsT2N6WmxVMUpxUW1OV05uSXphRzVGTUhWU1dtdHBXa2xSY0c1WldITndlV0ZTYkRjeWVIWkVVbGRxVlRGVmVXb3pTa053UzJoU05GZENURFJZTmtzdFgyMXVOMU5TTlhWUFRrUXRkeElYVEVwMFZGcGhWSEJQWVMxMk5VNXZVSE5NY1ZoM1FYTWFJa0ZLZDJzdE9HVTBVSFIyYURCd1J6TkRaVGhwWTE5NFpGOTZhVUpuYmtsalJtYyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzE0IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFRFS3N5c3RlbXMgQ2FyZWVycyIsImxpbmsiOiJodHRwczovL2NhcmVlcnMudGVrc3lzdGVtcy5jb20vdXMvZW4vam9iL0pQLTAwNDE0NDY3NS9SZWFjdC1EZXZlbG9wZXI/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
    },
    {
      title: "Mobile Software Engineer (React Native)",
      company_name: "Ursus, Inc.",
      location: "  Fremont, CA   ",
      via: "via SaluteMyJob",
      description:
        "Job Title: React Native Developer\n" +
        "Location: Remote (Fremont, CA or Austin, TX area)\n" +
        "Duration: 6+ months contract to hire...\n" +
        "\n" +
        "Summary:\n" +
        "\n" +
        "The Digital Experience team is at the forefront of building a consistent, global customer experience across all digital touchpoints - web, native apps and in-car infotainment systems. This team is building the next generation products and supporting infrastructure which allows our customers, living in 60+ countries, to understand, interact and purchase our amazing vehicles and energy products.\n" +
        "\n" +
        "We are seeking a Front-End Software Engineer to join our US Retail Digital Products team and help build the in-house iPad application used by store Advisors. You will be challenged to deliver features quickly but thoughtfully, balancing speed to market with longevity and scalability, all in the name of extraordinary customer experiences.\n" +
        "\n" +
        "Responsibilities\n" +
        "• Work with a cross-functional team of Software Engineers, Product Managers, UX Designers, QA Engineers and DevOps Engineers to own your solution from development to production\n" +
        "• Design, code and maintain tablet and mobile user experiences end-to-end.\n" +
        "• Optimize code for performance, stability and maintainability.\n" +
        "• Work with a cross-functional team of application/UI software engineers, QA/Validation, product, and designers.\n" +
        "Requirements\n" +
        "• 5-10 years of relevant experience\n" +
        "• Bachelor's Degree in Computer Science, Software Engineering, or similar areas of study.\n" +
        "• Minimum 2 years' experience in Mobile (iOS) development.\n" +
        "• 2+ years building mobile experiences with evidence of exceptional ability.\n" +
        "• Proficient in React Native, Redux, TypeScript and GraphQL.\n" +
        "• Thorough understanding of core design principles and common design patterns of React\n" +
        "• Experience with UI Unit Testing.\n" +
        "• Experience creating, maintaining and shipping enterprise level applications.\n" +
        "• Experience using common design patterns with high standards for code quality, maintainability, and performance.\n" +
        "• Experience with payment libraries, node.js, express.js, next.js, UI/UX, HCI design and Android development is preferred.\n" +
        "\n" +
        "IND123",
      job_highlights: [Array],
      related_links: [Array],
      extensions: [Array],
      detected_extensions: [Object],
      job_id:
        "eyJqb2JfdGl0bGUiOiJNb2JpbGUgU29mdHdhcmUgRW5naW5lZXIgKFJlYWN0IE5hdGl2ZSkiLCJodGlkb2NpZCI6IkNVbDVhbzdtTHR5cFUwUDRBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVXhQYm5CWlZubHpRMGR3ZEV0Q1RFRTVTRkI2WmpkNk5YWXdVV3N6VVdjdE0ydElSa3BhUWtkbVJsWnJhVU0xVUdGTGVFbGFVWGh0VkdWSE5uZGhOeTFXVXpGd04xZDFkRE4zTTFOeWNsQktkbmhwTkcxclpsZDNhR3BqZUVwSlVWbFBUV1Z1WjBOblkwY3RWazgwTVdkMWEwSmxVRTlLUTFwUU9HSmxhMFJEU0U1WWRXdFVhazFPZVVKUWVUaFBhelF0TlZCWFJYQkZhbWx0Y1dWclpFeHdSVkJCVVV4MVQzQmhRV05sZDJNNVYybGFaRmRZWTJvd1FsTkNRbTUzTmpkTWVFTnNObXRtTm14b1ZVeEtlamwyWDJaVmRVNTJla1ZDWkhoV1F6SnJRUklYVEVwMFZGcGhWSEJQWVMxMk5VNXZVSE5NY1ZoM1FYTWFJa0ZLZDJzdE9HWXhPWFl5UVd4Q1kwZEpVVWd5WjNCUk5GODJTV1ZUZEdkdmVVRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzE2IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFNhbHV0ZU15Sm9iIiwibGluayI6Imh0dHBzOi8vc2FsdXRlbXlqb2IuY29tL2pvYnMvbW9iaWxlLXNvZnR3YXJlLWVuZ2luZWVyLXJlYWN0LW5hdGl2ZS1mcmVtb250LWNhbGlmb3JuaWEvMTE2MzQyNjM0NC0yLz91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
    },
  ]);

  const jobTitleHandler = (e) => {
    setJobTitleState(e.target.value);
  };

  const locationHandler = (e) => {
    setLocationState(e.target.value);
  };

  const fetchFromAPI = async (query) => {
    console.log("Searching");
    const response = await fetch(`/keyword-search/${query}`);
    const data = await response.json();
    setResultsState(data);
  };

  const submitSearchForm = (e) => {
    e.preventDefault();
    console.log("searching");
    if (locationState) {
      if (locationState.includes(",")) {
        const locationString = locationState.split(",");
        let concatedString = "";
        locationString.map((word) => {
          concatedString += `${word.trim()}+`;
        });
        let searchString = jobTitleState + "+" + concatedString.slice(0, -1);
        console.log(searchString);
        fetchFromAPI(searchString);
      }
    } else {
      fetchFromAPI(jobTitleState);
    }
  };

  console.log(resultsState);
  return (
    <SearchContext.Provider
      value={{
        jobTitle: jobTitleState,
        location: locationState,
        results: resultsState,
        jobTitleHandler: jobTitleHandler,
        locationHandler: locationHandler,
        submitSearchForm: submitSearchForm,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
