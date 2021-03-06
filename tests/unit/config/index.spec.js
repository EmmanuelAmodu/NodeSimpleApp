const config = require('../../../config')

describe('config.dbUrl', () => {
    it('should return prod url', () => {
        expect(config.dbUrl('prod')).toContain('mongodb.net')
    })

    it('should return dev url', () => {
        expect(config.dbUrl('dev')).toContain('learningApp_dev')
    })

    it('should return dev url', () => {
        expect(config.dbUrl('staging')).toContain('learningApp_staging')
    })

    it('should return dev url', () => {
        expect(config.dbUrl(false)).toContain('learningApp_test')
    })
})

describe('config.DEBIG', () => {
    it('should return prod url', () => {
        expect(config.DEBUG()).toBe('app:error')
    })
})

describe('config.DEBIG', () => {
    it('should return prod url', () => {
        expect(config.DEBUG('dev')).toBe('app:*')
    })
})
