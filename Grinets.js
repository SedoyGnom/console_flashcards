const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

rl.question('Выберите тему: \n', (answer) => {
  if (answer === '1') {
    fs.readFile('./topics/Racoons.txt', 'utf-8', (err, data) => {
      let questions = [];
      let counter = 0;
      questions = data.split('\n').filter(el => el.length > 0);

      rl.question(`${questions[0]}\n`, (answer) => {
        if (answer === questions[1]) {
          console.log('Правильно');
          counter++;
        }
        else {
          console.log('Неправильно!');
        }
        rl.question(`${questions[2]}\n`, (answer) => {
          if (answer === questions[3]) {
            console.log('Правильно');
            counter++;
          }
          else {
            console.log('Неправильно!');
          }
          rl.question(`${questions[4]}\n`, (answer) => {
            if (answer === questions[5]) {
              console.log('Правильно');
              counter++;
            }
            else {
              console.log('Неправильно!');
            }
            rl.question(`${questions[6]}\n`, (answer) => {
              if (answer === questions[7]) {
                console.log('Правильно');
                counter++;
                console.log(`Вы ответили на ${counter} вопросов`);
                rl.close()
              }
              else {
                console.log('Неправильно!');
                console.log(`Вы ответили на ${counter} вопросов`);
                rl.close()
              }
            })
          })
        })
      })
    })

  }
  if (answer === '2') {
    fs.readFile('./topics/Hawk.txt', 'utf-8', (err, data) => {
      let questions = [];
      let counter = 0;
      questions = data.split('\n').filter(el => el.length > 0);

      rl.question(`${questions[0]}\n`, (answer) => {
        if (answer === questions[1]) {
          console.log('Правильно');
          counter++
        }
        else {
          console.log('Неправильно!');
        }
        rl.question(`${questions[2]}\n`, (answer) => {
          if (answer === questions[3]) {
            console.log('Правильно');
            counter++
          }
          else {
            console.log('Неправильно!');
          }
          rl.question(`${questions[4]}\n`, (answer) => {
            if (answer === questions[5]) {
              console.log('Правильно');
              counter++
            }
            else {
              console.log('Неправильно!');
            }
            rl.question(`${questions[6]}\n`, (answer) => {
              if (answer === questions[7]) {
                console.log('Правильно');
                counter++
                console.log(`Вы ответили на ${counter} вопросов`);
                rl.close()
              }
              else {
                console.log('Неправильно!');
                console.log(`Вы ответили на ${counter} вопросов`);
                rl.close()
              }
            })
          })
        })
      })
    })
  }
  if (answer === '3') {
    fs.readFile('./topics/Vidri.txt', 'utf-8', (err, data) => {
      let questions = [];
      let counter = 0;
      questions = data.split('\n').filter(el => el.length > 0);

      rl.question(`${questions[0]}\n`, (answer) => {
        if (answer === questions[1]) {
          console.log('Правильно');
          counter++
        }
        else {
          console.log('Неправильно!');
        }
        rl.question(`${questions[2]}\n`, (answer) => {
          if (answer === questions[3]) {
            console.log('Правильно');
            counter++
          }
          else {
            console.log('Неправильно!');
          }
          rl.question(`${questions[4]}\n`, (answer) => {
            if (answer === questions[5]) {
              console.log('Правильно');
              counter++
            }
            else {
              console.log('Неправильно!');
            }
            rl.question(`${questions[6]}\n`, (answer) => {
              if (answer === questions[7]) {
                console.log('Правильно');
                counter++
                console.log(`Вы ответили на ${counter} вопросов`);
                rl.close()
              }
              else {
                console.log('Неправильно!');
                console.log(`Вы ответили на ${counter} вопросов`);
                rl.close()
              }
            })
          })
        })
      })
    })
  }

})

function readTopics() {
  return new Promise((resolve, reject) => {
    fs.readdir('./topics', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
readTopics().then((data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(`${i + 1} ${data[i]}`);

  }
});
