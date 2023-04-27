export const errorMessageValues = {
  username: {
    required: "Le pseudo est requis",
    maxLength: {
      value: 20,
      message: "Le pseudo doit faire maximum 20 caractères",
    },
    minLength: {
      value: 3,
      message: "Le pseudo doit faire minimum 3 caractères",
    },
  },

  email: {
    required: "L'email est requis",
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: "L'email que vous avez saisi n'est pas valide",
    },
  },

  password: {
    required: "Le mot de passe est requis",
    // pattern: {
    //   value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
    //   message:
    //     "Le mot de passe doit contenir au moins une lettre, un nombre et un caractère spécial",
    // },
    // maxLength: {
    //   value: 20,
    //   message: "Le mot de passe doit faire maximum 20 caractères",
    // },
    // minLength: {
    //   value: 8,
    //   message: "Le mot de passe doit faire minimum 8 caractères",
    // },
  },

  title: {
    required: "Required",
    maxLength: {
      value: 14,
      message: "14 chars max",
    },
  },

  description: {
    required: "Required",
  },

  loginError: {
    message: "Your credentials don't seem to match",
  },

  signupError: {
    message: "An error has occurred, the email you entered may already exist",
  },
};

export interface errorMessageValuesProps {
  username: {
    required: string;
    maxLength: {
      value: number;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
  };

  email: {
    required: string;
    pattern: {
      value: any;
      message: string;
    };
  };

  password: {
    required: string;
    // pattern: {
    //   value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
    //   message:
    //     "Le mot de passe doit contenir au moins une lettre, un nombre et un caractère spécial",
    // },
    // maxLength: {
    //   value: 20,
    //   message: "Le mot de passe doit faire maximum 20 caractères",
    // },
    // minLength: {
    //   value: 8,
    //   message: "Le mot de passe doit faire minimum 8 caractères",
    // },
  };

  title: {
    required: string;
    maxLength: {
      value: number;
      message: string;
    };
  };

  description: {
    required: string;
  };

  loginError: {
    message: string;
  };

  signupError: {
    message: string;
  };
}
