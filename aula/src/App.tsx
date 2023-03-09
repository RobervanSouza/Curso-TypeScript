import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

interface INome {
  nome: string;
  number: number;
}

const Title = ({ nome }: INome) => {
  return <h1>{nome}</h1>;
};
type TypeChildrenProps = {
  children: React.ReactNode;
  size?: "small" | "large";
};
type MergeProps = {
  color: string;
};

const Children1 = ({ children, size }: TypeChildrenProps) => {
  return (
    <h1 style={{ fontSize: size === "small" ? "1.5rem" : "8rem" }}>
      {children}
    </h1>
  );
};
const Merge = ({ children, size, color }: TypeChildrenProps & MergeProps) => {
  //pode fazer um merge, juntar
  return (
    <h1
      style={{
        fontSize: size === "small" ? "1.5rem" : "3rem",
        color: "red",
      }}>
      {children}
    </h1>
  );
};
//3########################################################
const user = {
  id: 1,
  name: "John",
  idade: 23,
  isAdmin: true,
  date: new Date("19/2/1922"),
};
type UserProps = typeof user; //usa essa propriedade em outro lugar
const nome: UserProps = {
  id: 1,
  date: new Date("asdfasda"),
  idade: 23,
  isAdmin: false,
  name: "Administ",
};

//3######################################################
//1 Função avançada

function Lista<ItemType>({
  rederizar,
  itens,
}: {
  itens: ItemType[];
  rederizar: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {itens.map((item, index) => {
        return rederizar(item, index);
      })}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState<number | null>(null);//inicia como null, mas pode receber number
  if(count ===null){
    return <div>{count}</div>
  }
  const array = [
    {
      id: 1,
      nome: "robervan",
    },
  ];
  return (
    <div>
      <Title nome="ola mundo" number={23} />

      <div>
        <Children1 size="small"> estou aqui </Children1>
      </div>
      <Merge color=""> aqui faz um merge, junta tudo</Merge>
      <Lista
        itens={array}
        rederizar={(item, index) => {
          if (item.id == 1) {
            return <p>${item.nome}</p>;
          }
          return <h3>${item.nome}</h3>;
        }}
      />
    </div>
  );
}

export default App;
