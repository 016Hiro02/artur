let ask = (que, yes, no) => {if(confirm(que)){yes()}else{no()}};
ask("Вы согласны?", function(){alert("Вы согласны")},function(){alert("Вы не согласны")});