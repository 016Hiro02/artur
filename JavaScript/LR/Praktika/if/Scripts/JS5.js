let message;
login = prompt('Введите логин');
(login == 'Сотрудник')? message='Привет':
(login == 'Директор')? message='Здраствуйте':
(login == '')? message='Нет логина': message='';
alert(message);