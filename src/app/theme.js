import {createTheme} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
    ].join(','),

    button: {
      textTransform: 'none',
      fontWeight: 400,
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'main'},
          style: {
            backgroundColor: '#f4e041',
            borderRadius: 28,
            paddingRight: 25,
            paddingLeft: 25,
            fontWeight: 600,

            "&:hover": {
              backgroundColor: '#ffe302',
            },
          }
        },
        {
          props: {variant: 'upload'},
          style: {
            backgroundColor: '#f8f8f8',
            border: 1,
            borderRadius: 0,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,

            padding: 15,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: '#f8f8f8',
            },
          }
        },
      ],
    },
  },

  palette: {
    primary: {
      main: '#f4e041'
    },
    secondary: {
      main: '#f8f8f8'
    },
    common: {
      main: '#bfbfbf'
    },
    success: {
      main: '#f8f8f8'
    },
    blueMain: {
      main: '#00bdd3'
    }
  },
})

export default theme