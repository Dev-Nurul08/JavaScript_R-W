const quotes = [
  {
    title: 'To Kill a Mockingbird',
    quote: "You never really understand a person until you consider things from his point of view… until you climb into his skin and walk around in it.",
    author: 'Harper Lee'
  },
  {
    title: '1984',
    quote: "War is peace. Freedom is slavery. Ignorance is strength.",
    author: 'George Orwell'
  },
  {
    title: 'The Great Gatsby',
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Pride and Prejudice',
    quote: "I could easily forgive his pride, if he had not mortified mine.",
    author: 'Jane Austen'
  },
  {
    title: 'The Catcher in the Rye',
    quote: "Don't ever tell anybody anything. If you do, you start missing everybody.",
    author: 'J.D. Salinger'
  },
  {
    title: 'The Hobbit',
    quote: "There is nothing like looking, if you want to find something.",
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Brave New World',
    quote: "Words can be like X-rays if you use them properly—they’ll go through anything. You read and you’re pierced.",
    author: 'Aldous Huxley'
  },
  {
    title: 'Fahrenheit 451',
    quote: "It was a pleasure to burn.",
    author: 'Ray Bradbury'
  },
  {
    title: 'Crime and Punishment',
    quote: "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
    author: 'Fyodor Dostoevsky'
  },
  {
    title: 'The Road',
    quote: "You forget what you want to remember, and you remember what you want to forget.",
    author: 'Cormac McCarthy'
  },
    {
    title: 'The Alchemist',
    quote: "When you want something, all the universe conspires in helping you to achieve it.",
    author: 'Paulo Coelho'
  },
  {
    title: 'Little Women',
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    author: 'Louisa May Alcott'
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    quote: "Every human life is worth the same, and worth saving.",
    author: 'J.K. Rowling'
  },
  {
    title: 'To Kill a Mockingbird',
    quote: "Most people are nice when you finally see them.",
    author: 'Harper Lee'
  },
  {
    title: 'The Fellowship of the Ring',
    quote: "All we have to decide is what to do with the time that is given us.",
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Namesake',
    quote: "That's the thing about books. They let you travel without moving your feet.",
    author: 'Jhumpa Lahiri'
  },
  {
    title: 'Jane Eyre',
    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    author: 'Charlotte Brontë'
  },
  {
    title: 'Winnie-the-Pooh',
    quote: "You can’t stay in your corner of the forest waiting for people to come to you. You have to go to them.",
    author: 'A.A. Milne'
  },
  {
    title: 'The Alchemist',
    quote: "It’s the possibility of having a dream come true that makes life interesting.",
    author: 'Paulo Coelho'
  },
  {
    title: 'Pride and Prejudice',
    quote: "I could easily forgive his pride, if he had not mortified mine.",
    author: 'Jane Austen'
  },
  {
    title: "The Elements of Programming Style",
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian W. Kernighan & P. J. Plauger"
  },
  {
    title: "Unix for Beginners (1979)",
    quote: "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.",
    author: "Brian W. Kernighan"
  },
  {
    title: "The Art of Unix Programming",
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    title: "Various Talks & Essays",
    quote: "There are only two hard things in computer science: cache invalidation and naming things.",
    author: "Phil Karlton"
  },
  {
    title: "From quotes.cat-v.org",
    quote: "Controlling complexity is the essence of computer programming.",
    author: "Brian Kernighan"
  },
  {
    title: "From quotes.cat-v.org",
    quote: "Deleted code is debugged code.",
    author: "Jeff Sickel"
  },
  {
    title: "From quotes.cat-v.org",
    quote: "One of my most productive days was throwing away 1000 lines of code.",
    author: "Ken Thompson"
  },
  {
    title: "Quoted in various programming forums",
    quote: "Any program that tries to be so generalized and configurable that it could handle any kind of task will either fall short of this goal, or will be horribly broken.",
    author: "Chris Wenham"
  },
  {
    title: "From quotes.cat-v.org",
    quote: "A language that doesn't have everything is actually easier to program in than some that do.",
    author: "Dennis M. Ritchie"
  },
  {
    title: "From quotes.cat-v.org",
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  }
];

let display = document.getElementById('display');
let index = -1;

let displayQuote = (quote) => {
  display.innerHTML = '';
  let figure = document.createElement('figure');
  figure.innerHTML = `
    <blockquote class="blockquote mb-4">
      <strong>${quote.title}</strong>
      <p class="mt-2">${quote.quote}</p>
    </blockquote>
    <figcaption class="blockquote-footer mb-5">
      Someone famous in <cite title="${quote.author}">${quote.author}</cite>
    </figcaption>
  `;
  display.appendChild(figure);
};

const next = () => {
  if (index >= quotes.length - 1) {
    index = -1;
  }
  displayQuote(quotes[++index]);
};

const prev = () => {
  if (index <= 0) {
    index = quotes.length;
  }
  displayQuote(quotes[--index]);
};

// Load the first quote
prev();
