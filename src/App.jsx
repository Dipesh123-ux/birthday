import React, { useState } from "react";
import Gift from "./gift";
import Confetti from "./confetti";
import {motion} from 'framer-motion';
import yash from './WhatsApp Image 2022-10-15 at 23.07.43.jpeg'

const menuVariants = {
  opened: {
    top: 0,
    transition: {
      type: "spring",
      stiffness: 190,
      when: "beforeChildren",
      staggerChildren: 0.7,
       duration : 3
    },
   
  },
  closed: {
    top: "-150vh",
  },
};

const giftVariants = {
  opened: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 190,
      when: "beforeChildren",
      staggerChildren: 0.7,
       duration : 3
    },
   
  },
  closed: {
    y: "100vh",
  },
};

function App() {
  const [party, setParty] = useState(false);
  const [open,setOpen] = useState(false)

  return (
    <>
          <motion.div variants={menuVariants} animate={open ? "opened" : "closed"} className="content"><div class="container py-4">
		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={yash} alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue">Happiest Birthday Yashika!</h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Yeah I know this is the most nerdy way to wish someone but I do not have any materialistic thing for you. I'm too late to give you this small present cause busy in my dance 😂. From 1st year to now we always help each other in exams and you were always supportive when I was in any trouble.<br/>You may be rude sometimes I don't know why but Its okay now I'm good in handling that 😂. I hope you have enjoyed your day and thanks for coming to the event.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Your Coffee promise still pending 🥲</li>
				</ul>
			</div>
		</article>
	</div>
          </motion.div>
      {<Confetti party={party} setParty={setParty} />}
      <motion.div variants={giftVariants} animate={!open ? "opened" : "closed"}  className="App">
        <Gift  party={party} setParty={setParty} setOpen={setOpen} open={open} />

      </motion.div>
    </>
  );
}

export default App;
