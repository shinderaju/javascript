/*
 * create binary tree
 *
 */
function bTree() {
    //create root node
    this.root = null;
}
/*
 * add methods to bTree prototype
 */
bTree.prototype = {

    /*
     *method to add new value in tree
     * @ params{number} -value
     */
    add: function(value) {

        //create node object to having value
        var node = {
            value: value,
            left: null,
            right: null,
        };

        //variable to hold value of tree
        var temp;
        if (this.root == null) {
            this.root = node;
        } else {
            temp = this.root;
            var flag = true;

            while (flag) {
                //value already available then break
                if (value === temp.value) {
                    break;
                } else {
                    //if value less than curren node added to left side
                    if (value < temp.value) {
                        //if left node is not exists
                        if (temp.left === null) {
                            temp.left = node;
                            break;
                        } else {
                            temp = temp.left;
                        }
                    } //else value greater than curent node add to right side
                    else {
                        //if right node is not exists
                        if (temp.right === null) {
                            temp.right = node;
                            break;
                        } else {
                            temp = temp.right;
                        }
                    }

                }
            } //end while
        } //ens outermost else
    }, //end add function

    /*
     * to check that element is present or not
     * @ params{number} -value
     * @ return{boolean} -true/false
     */
    contain: function(value) {
        temp = this.root;
        if (value === this.root.value) {
            return true;
        } else {
            while (true) {
                //value greater than current value
                if (value > temp.value) {
                    //no value to right side
                    if (temp.right === null) {
                        return false;
                    }
                    temp = temp.right;
                } else
                if (value < temp.value) {
                    if (temp.left === null) {
                        return false;
                    }
                    temp = temp.left;
                } else
                    return true;
            }
        }
    }, //end of contain()

    /*
     * function to traves the tree by postOrder
     * print the tree element
     */
    traversePostOrder: function() {
        function postOrder(node) {
            if (node) {

                if (node.left != null) {
                    postOrder(node.left);
                }
                if (node.right != null) {
                    postOrder(node.right);
                }
                document.write(node.value + "<br>");
            }
        }
        postOrder(this.root);
    }, //end of traversePostOrder

    /*
     * function to traves the tree by InOrder
     * print the tree element
     */
    traverseInOrder: function() {
        function InOrder(node) {
            if (node) {

                if (node.left != null) {
                    InOrder(node.left);
                }
                document.write(node.value + "<br>");
                if (node.right != null) {
                    InOrder(node.right);
                }

            }
        }
        InOrder(this.root);
    }, //end of InOrder

    /*
     * function to traves the tree by preOrder
     * print the tree element
     */
    traversePreOrder: function() {
        function PreOrder(node) {
            if (node) {
                document.write(node.value + "<br>");
                if (node.left != null) {
                    PreOrder(node.left);
                }

                if (node.right != null) {
                    PreOrder(node.right);
                }

            }
        }
        PreOrder(this.root);
    }, //end of traversePreOrder


    /*function to remove node from tree
     * params{number} -value
     */
    remove: function(value) {

        temp = this.root;

        //value found at root node then
        if (value === this.root.value) {
            //let left side become new node
            SwapVal = this.root.left;
            parentOfSwapVal = null;
            document.write("value" + SwapVal.value + "<br>");
            if (SwapVal !== null) {
                temp1 = SwapVal.right;

                while (temp1 != null) {
                    parentOfSwapVal = SwapVal;
                    temp1 = temp1.right;
                    SwapVal = SwapVal.right;

                }
                document.write("valuelast" + parentOfSwapVal.value + "<br>");
                this.root.value = SwapVal.value;
                if (SwapVal.left !== null) {
                    parentOfSwapVal.right = SwapVal.right;
                } else
                    parentOfSwapVal.right = null;

            } else {
                this.root = this.root.right;
            }

        } //value is not at root node then
        else {
            parent = temp;
            while (true) {

                //value greater than current value
                if (value > temp.value) {
                    //no value to right side
                    if (temp.right === null) {
                        document.write("No such element in tree to delete<br>");
                        break;
                    }
                    parent = temp;
                    temp = temp.right;
                } else {
                    if (value < temp.value) {
                        if (temp.left === null) {
                            document.write("No such element in tree to delete<br>");
                            break;
                        }
                        parent = temp;
                        temp = temp.left;
                    } else {
                        if (value === temp.value) {

                            //node having no child
                            if (temp.right === null && temp.left === null) {
                                document.write("node dont have any child <br>");

                                if (parent.left !== null && parent.left.value === value) {
                                    // if(parent.left.value === value){
                                    document.write("node is to left of parent<br>");
                                    parent.left = null;
                                    //  }
                                    break;
                                }
                                if (parent.right != null && parent.right.value === value) {
                                    // if(parent.right.value === value){
                                    document.write("node right to parent <br>");
                                    parent.right = null;
                                    //}
                                    break;
                                }

                            }



                            //node having only left child
                            if ((temp.left !== null) && (temp.right === null)) {
                                document.write("node having only left child <br>");
                                if (parent.left !== null && value == parent.left.value) {
                                    document.write("node is to left of parent<br>");
                                    parent.left = temp.left;
                                    break;
                                }
                                if (parent.right !== null && value == parent.right.value) {
                                    document.write("node right to parent <br>");
                                    parent.right = temp.left;
                                    break;
                                }
                            }
                            //node having only right child
                            if ((temp.left === null) && (temp.right !== null)) {
                                document.write("node having only right child <br>");
                                if (parent.left !== null && value == parent.left.value) {
                                    document.write("node is to left of parent<br>");
                                    parent.left = temp.right;
                                    break;
                                }
                                if (parent.right !== null && value == parent.right.value) {
                                    document.write("node right to parent <br>");
                                    parent.right = temp.right;
                                    break;
                                }
                            }

                            //node having two child
                            if (temp.left !== null && temp.right !== null) {
                                document.write("node having two child <br>");
                                //let left side become new parent
                                SwapVal = temp.left;
                                parentOfSwapVal = temp;
                                temp1 = SwapVal.right;
                                while (temp1 != null) {
                                    parentOfSwapVal = SwapVal;
                                    temp1 = temp1.right;
                                    SwapVal = SwapVal.right;
                                }
                                //swap value by highes value from left
                                if (parent.left !== null && value == parent.left.value) {

                                    parent.left.value = SwapVal.value;

                                }
                                if (parent.right != null && value == parent.right.value) {

                                    parent.right.value = SwapVal.value;


                                }
                                //highest value required to change
                                if (SwapVal.left !== null) {

                                    SwapVal = SwapVal.left;
                                    break;
                                } else {
                                    if (SwapVal === parentOfSwapVal.right) {

                                        parentOfSwapVal.right = null;
                                    }
                                    if (SwapVal === parentOfSwapVal.left) {

                                        parentOfSwapVal.left = null;
                                    }

                                    // document.write("parentOfSwapval left value"+parentOfSwapVal.value+"<br>");
                                    break;
                                }


                            }


                        }


                    }
                }
            }
        }
    }
};




//end bTree.prototype


var t = new bTree();
t.add(10);
t.add(15);
t.add(6);
t.add(3);
t.add(8);
t.add(11);
t.add(17);
t.add(20);
//t.add(15);
//t.add(18);
//document.write(t.contain(1)+"<br>");
t.traversePostOrder();
t.remove(20);
document.write("===============<br>");
t.traversePostOrder();
