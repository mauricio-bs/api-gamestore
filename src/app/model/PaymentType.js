import Sequelize, { Model } from 'sequelize'

class PaymentType extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
        }, {
            sequelize})
        return this
    }
    static associate(models) {
        this.belongsTo(models.Payment)
    }
}

export default PaymentType