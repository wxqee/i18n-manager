import { withTracker } from 'meteor/react-meteor-data';
import SamplePage from '../pages/SamplePage.jsx';

export default withTracker(() => {
  const foo = 'bar';

  return {
    foo,
  };
})(SamplePage);
