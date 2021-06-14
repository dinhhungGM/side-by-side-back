const Wallet = require('../models/Wallet')
const Payment = require('../models/Payment')

exports.Deposit = async (req, res) => {
 const {paymentId, amount} = req.body
 try {
     const payment = await Payment.findById(paymentId)
     if(!payment){
        return res.status(403).json({success: false, message: 'Phương thức thanh toán không hợp lệ'})
     }
     else{
        let wallet = await Wallet.findOne({renterId: req.user})
        if(!wallet){
            return res.status(403).json({success: false, message: 'Không thể tìm thấy ví này'})
        }else{
            const newBalance =  parseInt(wallet.balance) + parseInt(amount)
            wallet = await Wallet.findByIdAndUpdate(walletId, {balance: newBalance})
            console.log(newBalance)
            return res.json({success: true, message: 'Nạp tiền thành công', wallet})
        }
     }
 } catch (error) {
     return res.status(500).json({success: false, message: 'Internal Server Error'})
 }  
}

exports.FetchInfo = async (req, res) => {
    try {
        const wallet = await Wallet.findOne({renterId: req.user})
        return res.json({success: true, wallet})
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
}

exports.Widthdraw = (req, res ) => {

}


exports.Pay = () => {

}