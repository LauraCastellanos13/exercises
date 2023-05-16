const regex = /\b(Pink)+\b/g;

const colors = 'Red, Green, Yellow, Black, Pink, White, Grey';

for (const match of colors.matchAll(regex)) {
  console.log(match);
}

const regex2 = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Tomato, Kiwi, Orange, etc, etc, etc';

for(const match of fruit.matchAll(regex2)) {
        console.table(match)
}