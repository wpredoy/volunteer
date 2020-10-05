import React, { useState } from 'react';
import fakedata from '../../fakeData'
import VolunteerFound from '../VolunteerFound/VolunteerFound';

const Volunteer = () => {
    const [help, setHelp] = useState(fakedata)
    return (
        <div className="container">
            <div className="row">
                {
                    help.map(help=><VolunteerFound key={help.id} help={help}></VolunteerFound>)
                }
            </div>
        </div>
    );
};

export default Volunteer;