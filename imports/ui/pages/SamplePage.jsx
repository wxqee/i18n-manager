import React from 'react';
import Button from 'material-ui/Button';
import SampleIconButtons from '../components/SampleIconButtons.jsx';
import SampleRaisedButton from '../components/SampleRaisedButton.jsx';
import SampleComplexButtons from '../components/SampleComplexButtons.jsx';
import SampleNestedList from '../components/SampleNestedList.jsx';
import SampleAlertDialog from '../components/SampleAlertDialog.jsx';
import SampleChips from '../components/SampleChips.jsx';

const SamplePage = () => (
  <div>
    <h1>Hello, sample page</h1>

    <Button>
      Hello World
    </Button>
    <hr />

    <h1>Alert Dialog</h1>
    <SampleAlertDialog />
    <hr />

    <h1>Icon Buttons</h1>
    <SampleIconButtons />
    <hr />

    <h1>Raised Button</h1>
    <SampleRaisedButton />
    <hr />

    <h1>Complex Buttons</h1>
    <SampleComplexButtons />
    <hr />

    <h1>Nested List</h1>
    <SampleNestedList />
    <hr />

    <h1>Chips</h1>
    <SampleChips />
    <hr />
  </div>
);

export default SamplePage;
