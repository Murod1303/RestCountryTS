import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <Header />
        <Search />
      </div>
    </main>
  );
};
