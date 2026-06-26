import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>nike shop</h1>
        <h2>добро пожаловать в интернет магазин nike...</h2>
        <h3>
          обувь Nike известна своим качеством...
        </h3>
      </header>

      <table border="1">
        <thead>
          <tr>
            <th>Модель кроссовок</th>
            <th>Тип</th>
            <th>Особенность</th>
            <th>Цена ($)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nike Air Force 1</td>
            <td>Повседневные</td>
            <td>Классический дизайн, подходит под любой стиль</td>
            <td>115$</td>
          </tr>

          <tr>
            <td>Nike Air Jordan 1</td>
            <td>Баскетбольные</td>
            <td>Легендарная модель, связанная с Майклом Джорданом</td>
            <td>140$</td>
          </tr>

          <tr>
            <td>Nike Air Max 90</td>
            <td>Спортивные</td>
            <td>Комфортная амортизация Air</td>
            <td>130$</td>
          </tr>

          <tr>
            <td>Nike Air Max 97</td>
            <td>Повседневные</td>
            <td>Футуристичный дизайн</td>
            <td>180$</td>
          </tr>

          <tr>
            <td>Nike Dunk Low</td>
            <td>Повседневные</td>
            <td>Streetwear стиль</td>
            <td>125$</td>
          </tr>

          <tr>
            <td>Nike Pegasus 41</td>
            <td>Беговые</td>
            <td>Лёгкие для бега</td>
            <td>140$</td>
          </tr>

          <tr>
            <td>Nike Vomero 18</td>
            <td>Беговые</td>
            <td>Мягкая амортизация</td>
            <td>160$</td>
          </tr>

          <tr>
            <td>Nike Metcon 9</td>
            <td>Тренировочные</td>
            <td>Для фитнеса и зала</td>
            <td>150$</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App