import Header from "./components/Header"
import Post from './components/Post';
import Sidebar from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizsaulo.png',
      name: 'Luiz Saulo',
      role: 'Front End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Whasupp y´all' }, 
      { type: 'paragraph', content: 'Today I´m taking one more step further on my programming journey. It´s a new front end course' },
      { type: 'link', content: 'https://github.com/luizsaulo' },           
    ],
    publishedIn: new Date('2022-06-24 15:18:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/luizsaulo.png',
      name: 'Luiz Saulo',
      role: 'Front End Developer'
    },
    content: [
      { type: 'paragraph', content: 'What´s happening? I´m back again with news' }, 
      { type: 'paragraph', content: 'I don´t wanna make everyone too excited, but the next couple of days seem promising!' },
      { type: 'link', content: 'https://github.com/luizsaulo' },           
    ],
    publishedIn: new Date('2022-06-27 16:42:00'),
  },
];

function App() {
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=> {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedIn={post.publishedIn}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}

export default App

