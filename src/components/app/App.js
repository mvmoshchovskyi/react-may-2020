import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import {UserCard} from '../user-card/UserCard';
import TestCard, { PostCard as Card } from '../post-card/PostCard';
// donetodo: достать в строке 7 массив allComments из констант
import { postsList,usersList,allComments } from '../../constants'; //
// donetodo помимо константы postsList достать еще usersList
// donetodo: тут сделать импорт  UserCard из components/user-card/UserCard

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const renderList = () => {
    const res = [];

    for (let i = 0; i < 6; i++) {
      const item = postsList[i];
      res.push(<Card post={item} key={item.id}/>)
    }
    return res;
  };

  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>

      {/*<div className="d-flex posts-container">*/}
      {/*  {*/}
      {/*    renderList()*/}
      {/*  }*/}
      {/*</div>*/}

      <div className="d-flex posts-container">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;

            // donetodo: найти в массиве usersList пользователя, айди которого равно user_id в посте (т.е. в данном случае item)
            //    для этого можно использовать функцию массива find или findIndex
            //    передать имя и фамилию пользователя как пропсу author в Card
            //   использовать для этого стринговый литерал ``
            //  в Card под телом поста срендерить имя автора, используя blockquote-footer класс из бутстрапа
            //  пример тут: https://hackerthemes.com/bootstrap-cheatsheet/#blockquote-footer

              let user = usersList.find(user=> user.id===item.user_id)
              const {last_name, first_name}=user



            // donetodo: найти в массиве allComments комментарии, post_id которых = id поста  (т.е. в данном случае item.id)
            //  для этого можно использовать метод массива filter
            //  передать этот массив в Card как пропсу под названиес comments

              const comments = allComments.filter(value=>value.post_id === item.id)

              return <Card
                  post={item}
                  key={item.id}
                  hasImage={odd}
                  author={`${ first_name } ${last_name}`}
                  comments = {comments}

              />
          })
        }
      </div>

      <div className="d-flex posts-container">
      {/*  donetodo: срендерить тут список пользователей, используя компонент UserCard */}
          {usersList.map(item=>{
              return(
                  <UserCard key = {item.id} user ={item}/>
              )
          })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
