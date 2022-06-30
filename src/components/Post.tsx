import React, { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Avatar from './Avatar';
import Comment from './Comment';

import styles from './Post.module.css';

export default function Post({ author, publishedIn, content }) {
    const [comments, setComments] = useState([
        'Post muito bacana'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedIn, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedIn, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity(''); // comando para zerar o campo o deixando em branco após ele ser preenchido e enviado
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!');
        // comando para avisar que o campo precisa ser preenchido
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title= {publishedDateFormatted} dateTime={publishedIn.toISOString()}>
               {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type == 'link') {
                    return <p key={line.content}><a href='#'>{line.content}</a></p>;
                }
            })}
            {/* o key irá ser colocado no primeiro elemento que aparecer no retorno de um map */}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            name='comment'
            placeholder='Deixe um comentário'
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required  //comando para deixar obrigatório o preenchumento do campo para que ele seja submetido
            />

            <footer>
                <button type='submit' disabled={isNewCommentEmpty}>
                    Publicar
                </button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
            })}
        </div>
    </article>
  )
}
