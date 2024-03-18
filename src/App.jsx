import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold underline">Flickr Gallery</h1>
      <List />
    </div>
  );
}

export default App;

//tailwindcss 설치 및 config파일 초기화
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init
