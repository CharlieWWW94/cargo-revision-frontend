import SideBar from "../components/SideBar";
import FlashcardList from "../components/FlashcardList";

export default function UserPage(props) {
  return (
    <section class="columns flashcard-body">
      <SideBar />
       <FlashcardList flashcards={props.flashcardInfo} />
    </section>
  );
}
  
