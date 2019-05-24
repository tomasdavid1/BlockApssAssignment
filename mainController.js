let api =  require('./blockchain_api'),
    LotteryContract = require('./blockchain_api').LotteryContract,
    main_address = '0x2a3bfa7dd62d11b15eb3d6793b54ea94895bcd98'

exports.main = (req, res) => {
    res.render('index', {
        title: 'Main',
        layout: 'main'
    });
};


exports.buy_ticket = (req,res,next) =>{
    LotteryContract.methods.buy_ticket()
        .send({from: main_address})

        .then(reciept => {

            LotteryContract.methods.get_remaining_tickets()
                .call({from: main_address})

                .then(remaining_tickets => {

                    console.log('hello yes these are the remaining tickets' + remaining_tickets)

                    if (remaining_tickets == 0){
                        LotteryContract.methods.get_addresses()
                            .call({from: main_address})

                            .then(winner => {
                                console.log('hello yes this is the winner' + remaining_tickets)

                                res.render('index', {
                                    title: 'Main',
                                    layout: 'main',
                                    winner : winner
                                });

                            })

                            .catch(error => console.log(error))

                    } else {

                        res.render('index', {
                            title: 'Main',
                            layout: 'main',
                            ticket_bought: true,
                            remaining_tickets: remaining_tickets
                        });
                    }

                })

                .catch(error => console.log(error))

        })

        .catch(error => console.log(error))
}

exports.get_addresses = (req,res,next) =>{
    LotteryContract.methods.get_addresses()
        .call({from: main_address})

        .then(addresses => {
            console.log(addresses)
            res.render('index', {
                title: 'Main',
                layout: 'main',
                addresses : addresses
            });

        })

        .catch(error => console.log(error))
}
