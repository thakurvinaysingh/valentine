export const GAME_CONSTANTS = {
  senderName: 'Sender',
  receiverName: 'Receiver',
};

export const MESSAGES = {
  welcome: (senderName: string, receiverName: string) =>
    `Hey ${receiverName} 💖\n${senderName} has prepared a little game for you…`,
  level1Success: 'Awww! First level done 😘 One step closer to my heart…',
  level2Success: "You're unstoppable 😍 My heart is officially racing!",
  finalQuestion: (receiverName: string) => `Will you be my Valentine, ${receiverName}? 💖`,
  noButtonTexts: [
    'Hey! That button is shy 😜',
    'Even the mountains say YES 🏔️🤍',
    'You already won my heart…',
    'The stars agree with me 🌟',
    'Don\'t be shy! 💕',
    'I believe in you! ❤️',
  ],
  finalYes: (senderName: string, receiverName: string) =>
    `YAYYYY!! 💖\n${receiverName}, you just made ${senderName}\nthe happiest person alive 🤍`,
  compliments: [
    'Too cute to lose 🥺',
    'Okay wow, marry me already 😆',
    'You\'re absolutely perfect 💕',
    'My heart is all yours 🤍',
    'You complete me 💘',
  ],
};

export const SHAYARI = [
  'White like snow, calm like the mountains,\nYour love is my forever destination 🤍🏔️',
  'In the silence of mountains, I find your voice,\nSoft, warm, and endlessly comforting 🏔️💕',
  'You are the peace I searched for,\nIn white snow and endless love 🤍❄️',
  'Your smile melts the coldest mountains,\nAnd sets my heart on fire 💖🔥',
  'Like mountains that stand forever,\nMy love for you will never fade 🏔️🤍',
  'In the beauty of white dreams,\nYou are my favorite reality 💭🤍',
];

export const WHY_SPECIAL = [
  {
    icon: 'Heart',
    text: 'Loves white color 🤍',
    description: 'Pure, serene, and timeless—just like the love we share every single day.',
    specialLine: 'You bring a sense of purity to my world that I never knew existed.',
    image: 'https://i.pinimg.com/736x/86/cb/25/86cb25d775e48007f9848cd70034af1d.jpg' // Minimalist White
  },
  {
    icon: 'Mountain',
    text: 'Dreams of mountain life 🏔️',
    description: 'A peaceful and majestic soul that finds beauty in the quiet strength of the peaks.',
    specialLine: 'One day, we will wake up to the mountain mist together, just as you dreamed.',
    image: 'https://i.pinimg.com/736x/c6/5f/e1/c65fe1999126c70309fba7b2a7b1e71c.jpg' // Mountains
  },
  {
    icon: 'Wind',
    text: 'Brings peace and warmth 🌬️',
    description: 'You are the gentle breeze that calms my storms and the warmth that keeps me safe.',
    specialLine: 'Being with you feels like the first warm day after a very long winter.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800' // Peace/Wind
  },
  {
    icon: 'Sparkles',
    text: 'Makes life magical ✨',
    description: 'Every mundane moment turns into a fairytale the second you walk into the room.',
    specialLine: 'You don’t just live life; you sprinkle magic on everything you touch.',
    image: 'https://i.pinimg.com/736x/68/80/46/688046ffdabbc2151b3dd2cb2af230e2.jpg' // Magic/Sparkles
  },
  {
    icon: 'Smile',
    text: 'Your smile brightens everything 😊',
    description: 'Infectious joy and laughter that can light up even the darkest of nights.',
    specialLine: 'Your smile is my favorite sight in the world—never let it fade.',
    image: 'https://i.pinimg.com/1200x/4e/59/46/4e5946585ed712a8cf17aabfffa6bf8b.jpg' // Joy
  },
  {
    icon: 'Zap',
    text: 'Sets my soul on fire 💥',
    description: 'A passionate and inspiring energy that pushes me to be the best version of myself.',
    specialLine: 'You are the spark that turned my life into a beautiful adventure.',
    image: 'https://i.pinimg.com/736x/eb/84/ea/eb84eaebf7d5067465e9d529dd2420aa.jpg' // Passion/Sunset
  },
];

export const MEMORY_PLACEHOLDERS = [
  { id: 1, title: 'Our First Meeting', placeholder: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg' },
  { id: 2, title: 'Mountain Adventure', placeholder: 'https://images.pexels.com/photos/3408478/pexels-photo-3408478.jpeg' },
  { id: 3, title: 'Snowy Day Together', placeholder: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg' },
  { id: 4, title: 'Sunset Moments', placeholder: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg' },
  { id: 5, title: 'Coffee & Conversations', placeholder: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg' },
  { id: 6, title: 'Forever & Always', placeholder: 'https://images.pexels.com/photos/1103123/pexels-photo-1103123.jpeg' },
];

export const GAME_CONFIG = {
  puzzle: {
    gridSize: 3,
    difficulty: 'easy',
  },
  runner: {
    targetDistance: 100,
    jumpHeight: 100,
    gameSpeed: 5,
  },
};

export const VALENTINE_FEELINGS = [
  { 
    id: 1, 
    title: 'Purest Love', 
    feeling: 'Every time I see you, my heart finds its home in your smile.',
    poem: 'White like snow, calm like the mountains,\nYour love is my forever destination 🤍🏔️',
    image: 'https://i.pinimg.com/736x/fd/f3/47/fdf3479ff33fd7b0eb3b5d32623eac00.jpg' // Heart/Love
  },
  { 
    id: 2, 
    title: 'Silent Peace', 
    feeling: 'Your presence is the calm I always searched for in this busy world.',
    poem: 'In the silence of mountains, I find your voice,\nSoft, warm, and endlessly comforting 🏔️💕',
    image: 'https://i.pinimg.com/736x/c3/69/c4/c369c4b3ab1cf022b1155afe577678c6.jpg' // Mountains
  },
  { 
    id: 3, 
    title: 'Eternal Spark', 
    feeling: 'You are the light that turns my darkest days into a beautiful dream.',
    poem: 'Your smile melts the coldest mountains,\nAnd sets my heart on fire 💖🔥',
    image: 'https://i.pinimg.com/736x/4c/28/05/4c280572d417e9f877fc7b61a6b221cd.jpg' // Sparkle/Valentine
  }
];

export const SHAYARI_WITH_IMAGES = [
  {
    text: "White like snow, calm like the mountains,\nYour love is my forever destination 🤍🏔️",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200",
  },
  {
    text: "In the silence of mountains, I find your voice,\nSoft, warm, and endlessly comforting 🏔️💕",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=1200",
  },
  {
    text: "You are the peace I searched for,\nIn white snow and endless love 🤍❄️",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200",
  },
  {
    text: "Your smile melts the coldest mountains,\nAnd sets my heart on fire 💖🔥",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200",
  },
  {
    text: "Like mountains that stand forever,\nMy love for you will never fade 🏔️🤍",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200",
  },
  {
    text: "In the beauty of white dreams,\nYou are my favorite reality 💭🤍",
    image: "https://images.unsplash.com/photo-1516589174184-c68526674fd6?auto=format&fit=crop&w=1200",
  },
];