import { expect } from 'chai';
import DataMockController from '../src/data-mock-controller';

describe('测试 data-mock-controller.js', function () {
    describe('常规验证', function () {
        it('DataMockController 属性存在', function () {
            expect(DataMockController).to.be.an('function');
        });
    });

    describe('参数list为普通数组', function () {
        let dataMockController = new DataMockController(['a', 'b', 'c', 'd']);
        it('dataMockController.store 有四个元素', function () {
            expect(dataMockController.store).to.have.lengthOf(4);
        });

        it('dataMockController.getRandom() 随机返回一个list中的值', function () {
            expect(dataMockController.getRandom()).to.be.oneOf(['a', 'b', 'c', 'd']);
        });
    });

    describe('验证 addOne', function () {
        let dataMockController;

        beforeEach(function () {
            dataMockController = new DataMockController(['a', 'b']);
        });

        it('dataMockController.addOne("a") 重复', function () {
            dataMockController.addOne('a');
            expect(dataMockController.store).to.have.lengthOf(2);
        });

        it('dataMockController.addOne("c") 不重复', function () {
            dataMockController.addOne('c');
            expect(dataMockController.store).to.have.lengthOf(3);
        });

        it('dataMockController.addOne(DataItem) 重复', function () {
            dataMockController.addOne({
                value: 'a'
            });

            expect(dataMockController.store).to.have.lengthOf(2);
        });

        it('dataMockController.addOne(DataItem) 不重复', function () {
            dataMockController.addOne({
                data: 'DATAITEM',
                id: 'ID',
                tags: ['TAGS']
            });

            expect(dataMockController.store).to.have.lengthOf(3);
        });
    });

    describe('验证 addList', function () {
        let dataMockController;

        beforeEach(function () {
            dataMockController = new DataMockController(['a', 'b']);
        });

        it('dataMockController.addList(["a","c"])', function () {
            dataMockController.addList(['a', 'c']);
            expect(dataMockController.store).to.have.lengthOf(3);
        });

    });

});
