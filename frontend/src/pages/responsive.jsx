export const mobile = (props) => {
    return `
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
    return `
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
    return `
    @media only screen and (min-width: 1024px) {
      ${props}
    }
  `;
};
