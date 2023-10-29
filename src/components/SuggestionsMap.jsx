export const suggestions_map = {
  "Have you researched the freelance market for JavaScript programmers?": {
    Yes: "Great! Staying informed about market trends will be beneficial.",
    No: "Consider researching local and online freelance markets to understand demand and rate for JavaScript developers. Platforms like Upwork, Freelancer, and GitHub Jobs can provide insight.",
    Somewhat:
      "It might be worth diving deeper into local and online freelance markets to better understand the demand and rate for JavaScript developers.",
  },
  "Do you have a consultant CV tailored for JavaScript projects?": {
    Yes: "Excellent! A tailored CV is crucial in showcasing your expertise.",
    No: "Create a specialized CV highlighting your JavaScript projects, skills, and experiences. Tailoring your CV can significantly increase your chances of securing freelance projects.",
    "In progress":
      "Good progress! A tailored CV can significantly increase your chances of securing freelance projects.",
  },
  "Have you sent your CV to brokers to gauge the market?": {
    Yes: "Good step! Brokers can be a good source of projects and market insight.",
    No: "Sending your CV to brokers or agencies specializing in tech freelancing can provide you a sense of the market and potentially lead to project offers.",
    Somewhat:
      "Consider reaching out to more brokers or agencies that specialize in tech freelancing for a broader market perspective.",
  },
  "Do you have a plan for managing bookkeeping?": {
    Yes: "Fantastic! Proper bookkeeping is crucial for managing your freelance business.",
    No: "It’s essential to have a system for managing finances. Consider using accounting software or hiring a professional to keep track of income, expenses, and taxes.",
    Somewhat:
      "While it's a start, it’s essential to solidify your system for managing finances. Consider using accounting software or seeking professional help.",
  },
  "Have you chosen a business name?": {
    Yes: "Fantastic! A unique business name can set you apart and make you memorable to potential clients.",
    No: "Take some time to brainstorm a name that represents you and your services well. Remember, a unique and professional name can help attract potential clients.",
  },
  "Are you prepared for client interviews and contract negotiations?": {
    Yes: "Great! Being prepared will help you secure favorable contracts and build positive client relationships.",
    No: "Practice common interview questions, and learn the basics of contract negotiation to ensure fair terms and clear project scopes.",
    Somewhat:
      "It's essential to be fully prepared. Consider practicing common interview questions and familiarizing yourself with contract negotiation basics.",
  },
  "Do you have a portfolio demonstrating your JavaScript skills and completed projects?":
    {
      Yes: "Wonderful! A strong portfolio is a great way to attract potential clients and showcase your expertise in JavaScript.",
      No: "Build a portfolio showcasing your JavaScript projects, code samples, and client testimonials if available. Platforms like GitHub or a personal blog can be used for this purpose.",
      "In progress":
        "Keep it up! A strong portfolio will be pivotal in attracting potential clients and showcasing your JavaScript expertise.",
    },
};

export const getJsKnowledgeSuggestion = (value) => {
  if (value >= 1 && value <= 3) {
    return {
      level: "Complete Beginner to Basic Understanding",
      suggestions: [
        "Learn the Basics: Start with introductory courses on platforms like Udemy, Coursera, and Khan Academy.",
        "Interactive Learning: Use platforms like Codecademy and FreeCodeCamp for interactive exercises.",
        "Read Documentation: Familiarize yourself with the official MDN documentation for JavaScript.",
      ],
    };
  } else if (value >= 4 && value <= 6) {
    return {
      level: "Intermediate Understanding",
      suggestions: [
        "Deepen Your Knowledge: Consider intermediate courses on Udemy, Pluralsight, or Treehouse.",
        "Practice Coding: Platforms like LeetCode, HackerRank, and Codewars offer challenges that can enhance your problem-solving skills.",
        "Join Forums: Engage with communities on Stack Overflow, Reddit's r/javascript, and other forums to learn from discussions and ask questions.",
        "Consider Bootcamps: Institutions like Technigo offer coding bootcamps that can provide intensive training and speed up your learning curve.",
      ],
    };
  } else if (value >= 7 && value <= 8) {
    return {
      level: "Advanced Understanding",
      suggestions: [
        "Specialize: Depending on your interests, dive deeper into areas like React, Node.js, or Vue.js through specialized courses.",
        "Read Books: Titles like 'You Don't Know JS' by Kyle Simpson provide deeper insights into the language.",
        "Contribute to Open Source: Join open-source projects on GitHub, which can be both a learning experience and a way to give back to the community.",
      ],
    };
  } else if (value >= 9 && value <= 10) {
    return {
      level: "Expert Level",
      suggestions: [
        "Stay Updated: The world of JavaScript is always evolving. Regularly check sites like JavaScript Weekly, ES6 Features, or 2ality to stay updated with the latest changes.",
        "Teach and Mentor: Share your knowledge by mentoring juniors, writing blogs, or even creating your own courses on platforms like Udemy or Teachable.",
        "Networking: Attend conferences, webinars, or local meetups (like JSConf, NodeConf) to network with fellow experts and learn about the latest trends and innovations.",
      ],
    };
  } else {
    return {
      level: "Unspecified",
      suggestions: ["Please input a valid knowledge level between 1 and 10."],
    };
  }
};

export const checkbox_suggestions = {
  "Registered business":
    "Great! Staying compliant with local business regulations is crucial.",
  "Aware of tax obligations":
    "Great! Staying compliant with tax laws is crucial.",
  "Resignation ready":
    "This is a big step towards your freelancing career. Ensure to have a smooth transition plan.",
  "Strategy for projects":
    "Excellent! A well-thought-out strategy will keep a steady stream of projects coming in.",
  "Setup a business account":
    "Smart move! Keeping your business finances separate makes accounting and tax time much easier.",
};

export const checkbox_unchecked_suggestions = {
  "Registered business":
    "Register your business to ensure compliance with local laws and regulations.",
  "Aware of tax obligations":
    "Educate yourself on tax obligations to ensure compliance with local laws and regulations.",
  "Resignation ready":
    "Ensure you have a solid financial cushion and a clear plan before transitioning to full-time freelancing.",
  "Strategy for projects":
    "Develop a strategy by identifying platforms to find projects, networking, and building a strong online presence showcasing your JavaScript skills.",
  "Setup a business account":
    "Consider setting up a business account. It will help you manage your finances, build business credit, and keep your personal and business expenses separate.",
};
