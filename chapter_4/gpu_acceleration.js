const tf = require('@tensorflow/tfjs-node-gpu');

const tensor = tf.tensor([1, 2, 3, 4]);

tensor.print();

const squaredTensor = tensor.square();
squaredTensor.print();
