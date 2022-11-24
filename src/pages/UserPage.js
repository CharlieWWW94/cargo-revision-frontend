import FlashcardList from "../components/FlashcardList";

export default function UserPage(props) {
    return (<>
    <h1 className="userpage">User Page</h1>
    <section className='mt-5'>
    <FlashcardList flashcards={props.flashcardInfo} />
    </section>
    </>);
  }
  