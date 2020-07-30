import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

let theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      text: {
          primary: '#FF3636'
      }
    },
  });
theme = responsiveFontSizes(theme);

export default theme