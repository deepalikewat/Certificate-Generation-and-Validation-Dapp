
export default async function handler(req, res) {
    const a = "de"
    const b = "r"
    if(req.body.iacc==a && req.body.iname==b){
        res.status(200).json({mes:"login successfully",secret:"s1"})
    }
    else{
    res.status(200).json({mes:"login failed"})
    }
}
