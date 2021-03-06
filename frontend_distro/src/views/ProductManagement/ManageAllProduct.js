import React, { Component } from 'react';
import { Table, Input, Form, Icon,Divider } from 'antd';
import { Button, Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
import { connect } from 'react-redux'
import Highlighter from 'react-highlight-words';
import { ProductGetList, ProductAdd, ProductEdit, ProductSubmitDelete } from './TransactionAction'
import Swal from 'sweetalert2'

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
            children
          )}
      </td>
    );
  }
}

class ManageAllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }

    this.columns = [
      {
        title: 'No',
        dataIndex: 'No',
        width: '5%',
      },
      {
        title: 'Article',
        dataIndex: 'Article',
        width: '10%',
        ...this.getColumnSearchProps('Article'),

      },

      {
        title: 'Tenant',
        dataIndex: 'Tenant',
        width: '10%',
        ...this.getColumnSearchProps('Tenant'),

      },
      {
        title: 'Product Name',
        dataIndex: 'product_name',
        width: '20%',
        ...this.getColumnSearchProps('product_name'),

      },
      {
        title: 'Size',
        dataIndex: 'size',
        width: '4%',
        ...this.getColumnSearchProps('size'),

      },
      {
        title: 'Color',
        dataIndex: 'color',
        width: '10%',
        ...this.getColumnSearchProps('color'),

      },
      {
        title: 'Normal Stock',
        dataIndex: 'normal_stock',
        width: '5%',
        ...this.getColumnSearchProps('normal_stock'),

      },
      {
        title: 'OB Stock',
        dataIndex: 'ob_stock',
        width: '5%',
        ...this.getColumnSearchProps('ob_stock'),

      },
      {
        title: 'Normal Price',
        dataIndex: 'normal_price',
        width: '10%',
        ...this.getColumnSearchProps('normal_price'),

      },
      {
        title: 'OB Price',
        dataIndex: 'ob_price',
        width: '10%',
        ...this.getColumnSearchProps('ob_price'),

      },
      {
        title: 'Action',
        dataIndex: 'operation',
        render: (text, record) =>
          this.props.TransactionReducer.ManageAllProduct.dataSource.length >= 1 ? (
            <span>
            <button className="btn btn-sm btn-outline-warning" id={record.key} onClick={
              () => {
                // this.props.history.push("/productManagement/ManageProductAdd/")
                this.props.history.push("ManageProductAdd/" + record.key)
                this.props.ProductEdit()
              }
            }><i className="fa fa-pencil"></i></button>&nbsp;
            <button className="btn btn-sm btn-outline-danger" id={record.key} onClick={
              () => {
                let data = ({
                  barang_id: record.key
                })

                Swal.fire({
                  title: 'Are you sure?',
                  text: 'You Will Not Get Back The Data After Deleted',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes, delete it!',
                  cancelButtonText: 'No, keep it'
                }).then((result) => {
                  if (result.value) {
                    this.props.ProductSubmitDelete(JSON.stringify(data))
                    Swal.fire(
                      'Deleted!',
                      'Success Deleted Data.',
                      'success'
                    )
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                      'Cancelled',
                      'Canceled Delete Data',
                      'error'
                    )
                  }
                })
              }
            }><i className="fa fa-trash"></i>
            </button>
            <Divider type="vertical" />
          </span>
            
          ) : null,
      },
    ];
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          color="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#f80' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#20a8e4', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={"" + text}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  componentDidMount() {
    try {
        this.props.ProductGetList()
    } catch (error) {
      alert(error.message)
    }
  }


  render() {
    const {
    dataSource,
      icon } = this.props.TransactionReducer.ManageAllProduct;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className={icon}></i> Manage All Product
              </CardHeader>
              <CardBody>
                <Col col="2" sm="4" md="2" xl="2" className="mb-3 mb-xl-0">
                  <Button
                    onClick={
                      () => {
                        this.props.history.push("/productManagement/ManageProductAdd")
                        this.props.ProductAdd()
                      }
                    } color="success" style={{ marginBottom: 16 }}>
                    <i className="fa fa-plus"></i>&nbsp;&nbsp;Add
                  </Button>
                </Col>
                <Col xl={12}>
                  <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                  />
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  TransactionReducer: state.TransactionReducer
})

const mapDispatchToProps = {
  ProductGetList,
  ProductAdd,
  ProductEdit,
  ProductSubmitDelete
}
const connectRedux = connect(mapStateToProps, mapDispatchToProps)(ManageAllProduct)

export default connectRedux;