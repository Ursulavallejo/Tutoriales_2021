import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
 const history = useNavigate();

    function addMeetupHandler(meetupData) {
      fetch('https://react-getting-started-1a174-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
              method:'POST',
              body: JSON.stringify(meetupData),
              headers: {
                  'Content-Type': 'application/json'
              }
        }
       /* Give me error :history.replace is not a function*/
        ).then( () => { history.replace('/');
        });
    }
    return (<section>
        <h1>Add New Meetup </h1>
<NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
}

export default NewMeetupPage;