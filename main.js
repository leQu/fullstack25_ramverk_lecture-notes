import { doSomething, soSomethingInPrivate } from "./more.js";

function run() {
  console.log("Hello world");
  const result = doSomething(123);
  console.log(result);
}

run();

return (
  <div>
    <Navigation />
    <DoSomething />
    <Welcome />
    <MainContent />
    <Footer />
  </div>
);
