import SideBar from "../components/SideBar";
import FlashcardList from "../components/FlashcardList";

export default function UserPage(props) {
  return (
    <section class="columns">
      <SideBar />
       <FlashcardList flashcards={props.flashcardInfo} />
    </section>
  );
}
  
