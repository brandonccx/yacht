from behave import *
import logging
import time
import requests

LOG = logging.getLogger('behave')

@given('we have auth server started')
def step_impl(context):
  pass

@when('we get user list by the api')
def step_impl(context):
  context.connected = False
  for i in range(5):
    try:
      LOG.info('connecting to auth_server')
      req = requests.get('http://127.0.0.1:9000/user');
      if req.status_code == 200:
        context.connected = True
        break
    except requests.exceptions.ConnectionError:
      LOG.info('connection excepted, will try again')
      time.sleep(1)

@then('we should get status 200 and no errors')
def step_impl(context):
  assert context.connected is True
  assert context.failed is False