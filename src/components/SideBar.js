export default function SideBar(props) {
  return (
    <aside
      class="menu has-background-light p-5 column is-one-quarter is-flex is-flex-direction-column is-justify-content-space-between"
      style={{ minHeight: "93vh" }}
    >
      <ul class="menu-list mt-5">
        <header>
          <p class="menu-label is-active mb-5 title is-5">Your Sets</p>
        </header>
        <li>
          <a class="button is-fullwidth mb-3">Geography</a>
        </li>
        <li>
          <button class="button is-fullwidth mb-3">Computer Science</button>
        </li>
        <li>
          <button class="button is-fullwidth mb-3">Spanish</button>
        </li>
      </ul>
      <ul class="menu-list is-align-content-end">
        <li>
          <a class="is-active">Create New Set +</a>
        </li>
      </ul>
    </aside>
  );
}
