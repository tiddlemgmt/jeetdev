type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Jeet Dev — Portfolio",
    fullName: "Jeet Dev",
    email: "jeetdev@basemail.com",
  },
  hero: {
    name: "Jeet Dev",
    p: ["I develop very good project"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a dedicated developer with a keen focus on blockchain technology, specializing in the creation of cryptocurrency tokens. This specialized skill set enables me to develop innovative and secure digital assets, contributing significantly to the burgeoning digital currency market. My work in crafting these tokens is driven by more than just passion for technology; it's a means to support my family here in India. By aligning with clients' visions and leveraging the latest in blockchain advancements, I ensure the delivery of projects that not only fulfill market needs but also sustain my family's livelihood. Collaborating with partners and clients, I'm committed to transforming ideas into reality, providing for my loved ones through each successful project. Let's embark on this journey together, harnessing the power of cryptocurrencies to create meaningful and impactful solutions.






      `,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
