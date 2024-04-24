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
				<h1 class="postcard__title blue">Hey Best junior!</h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Tumhe yaad hai tumhare first year m jb humne bat start ki thi? It was such a great time for me. I still recall our first meeting at the ICH for your sih doubt, and then our trip to Bhedaghat—it was amazing, but ik mere friends ke karn awkward ho gya tha.
Mene socha tha now I got a good friend, but when I saw you with that senior, mujhe bura lga tha. But now, as we're talking again and jb m Bangalore ja rha tha us time bhi tum mujhse milne aae thi, even you also called me there, I realize I can't keep these feelings to myself any longer.
I don't want to live with regrets, so I'm laying it all out—I have feelings for you, more than just as a friend. You've been such an incredible presence in my life. Mujhe tumhara response nhi janna bcz it's too late now  but you are the best junior and friend I ever had 🤍🫶.</div>
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
