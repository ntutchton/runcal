import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

let theme = createMuiTheme({
    palette: {
      training: {
        OFF: {
          main: '#424242',
          light: '#b3b3b3',
          text: '#FFF'
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