import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

let theme = createMuiTheme({
    palette: {
      training: {
        OFF: {
          main: grey[400],
          light: grey[100],
          text: '#000'
        },
        PACE: {
          main: '#00e676',
          light: '#ccffe6',
          text: '#FFF'
        },
        DISTANCE: {
          main: '#ffc400',
          light: '#ffeeb8',
          text: '#FFF'
        },
        CROSSTRAIN: {
          main: '#ff3d00',
          light: '#ffccbd',
          text: '#FFF'
        },
        RECOVERY: {
          main: '#2979ff',
          light: '#c7dbff',
          text: '#FFF'
        },
      }
    },
  });
theme = responsiveFontSizes(theme);

export default theme