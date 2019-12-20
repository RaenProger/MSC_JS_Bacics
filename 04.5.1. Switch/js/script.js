//Switch

let answer = prompt('Введите имя музыканата');
answer = answer.toLowerCase();
switch(answer){
    case 'dr.dre':
        console.log('rap');
        break;
        case 'jimmy hendrix':
            console.log('rock');
            break;
            case 'breatny speraas':
                console.log('pop');
                break;
                default:
                    console.log('no such singer');
                    break;

}